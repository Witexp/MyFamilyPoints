import React, {useState} from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { getPontLeva } from '../../Redux/actions'
import { styles } from '../../styles'

const Lev = (props) => {

    const [valueHomework, onValueHomework ] = useState('0')
    const [valueDishwasher, onValueDishwasher ] = useState('0')
    const [valueBehavior, onValueBehavior ] = useState('0')
    const [valueAdditionally, onValueAdditionally ] = useState('0')
    const p = 10


    
    
    const dateformat = (date) => {
        let dd = date.getDate()
        if (dd < 10) dd = '0' + dd
        let mm = date.getMonth()
        if (mm < 10) mm = '0' + dd
        let yyyy = date.getFullYear()
        if (yyyy < 10) yyyy = '0' + dd
        
        return dd + '.' + mm + '.' + yyyy
    }
    const nowDate = dateformat( new Date());
    console.log('Текущая дата', nowDate)

    console.log('props leva', props.points)
    console.log('props leva', Object.keys(props.points).length )
    if (props.loading ) return <View style={styles.center}><ActivityIndicator size="large" color="#0000ff" /></View>
    
    const fetchToServer = async () => {
       
        const response = await  fetch(`https://my-family-points.firebaseio.com/lev/date.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            homework: +valueHomework,
            dishwasher: +valueDishwasher,
            behavior: +valueBehavior,
            additionally: +valueAdditionally,
        })
        });
        const dt = await response.json()
        console.log('dt', dt)
    }

    //const 
    
    return (
        <View style={styles.center}>
            <Text style={styles.h1}>Tab Lev</Text>
            <View style={styles.button}><Button title='загрузить с сервера' onPress={props.getPoint}/></View>
           {Object.keys(props.points).length > 0 &&  
            (<View style={{ width: '70%'}}>
                <View>
                    <Text>Дата: {props.points.date.date}</Text>
                    
                </View>
                <View style={styles.pointvaluebox}>
                    <Text>Уроки: {props.points.date.homework}</Text>
                    <TextInput 
                        style={styles.pointvalue}
                        onChangeText={text => onValueHomework(text)}
                        value={valueHomework}
                    />
                </View>

                <View style={styles.pointvaluebox}>
                <Text>Мытье посуды: {props.points.date.dishwasher} </Text>
                    <TextInput 
                        style={styles.pointvalue}
                        onChangeText={text => onValueDishwasher(text)}
                        value={valueDishwasher}
                    />
                </View>
               
                <View style={styles.pointvaluebox}>
                <Text>Поведение: {props.points.date.behavior}</Text>
                    <TextInput 
                        style={styles.pointvalue}
                        onChangeText={text => onValueBehavior(text)}
                        value={valueBehavior}
                    />
                </View>
                
                <View style={styles.pointvaluebox}>
                <Text>Дополнительно: {props.points.date.additionally}</Text>
                    <TextInput 
                        style={styles.pointvalue}
                        onChangeText={text => onValueAdditionally(text)}
                        value={valueAdditionally}
                    />
                </View>
               
                <View style={styles.button}><Button title='сохранить' onPress={()=>fetchToServer()}/></View>
                
            </View>)
            
            }


        </View>
    )
}

const mapStateToProps = (state) =>{
    console.log('lev state', state.points.points)
    return {
        points: state.points.points,
        loading: state.app.loading,
    }
}

const mapDispathToProps = (dispatch) => ({
    getPoint: () => {dispatch(getPontLeva())}

})
export default connect(mapStateToProps , mapDispathToProps)(Lev)
