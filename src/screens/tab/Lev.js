import React from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { getPontLeva } from '../../Redux/actions'
import { styles } from '../../styles'

const Lev = (props) => {
    console.log('props leva', props.points)
    console.log('props leva', Object.keys(props.points).length )
    if (props.loading ) return <View style={styles.center}><ActivityIndicator size="large" color="#0000ff" /></View>
    
    
    return (
        <View style={styles.center}>
            <Text style={styles.h1}>Tab Lev</Text>
            <Button title='загрузить с сервера' onPress={props.getPoint}/>
           {Object.keys(props.points).length > 0 &&  
            (<View>
                <Text>Дата: {props.points.date.date}</Text>
                <Text>Уроки: {props.points.date.homework}</Text>
                <Text>Мытье посуды: {props.points.date.dishwasher} </Text>
                <Text>Поведение: {props.points.date.behavior}</Text>
                <Text>Дополнительно: {props.points.date.additionally}</Text>
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
