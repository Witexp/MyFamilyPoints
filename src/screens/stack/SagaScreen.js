import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { getUserThink,getUserFromSaga, cleanUserList } from '../../Redux/actions'
import { styles } from '../../styles'
import ListItemSaga from './ListItemSaga'

class SagaScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users: [],
             isLoading: false,
        }
    }
    
    fetchData = async() => {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // const data = await response.json()
        // console.log(data.name)
        // this.setState({users: data})

    } 


    render() {


        console.log('userInStore: ',this.props.usersInStore)
        if (this.props.loading) return <View style={styles.center}><ActivityIndicator size="large" color="#0000ff" /></View>

        return (
            <View style={styles.center}>
                <Text style={styles.h2}> SagaScreen (users) </Text>
                <Button title='Загрузить пользователей' onPress={this.props.getUserFromSaga}/>
                <ScrollView>
                    {this.props.usersInStore.length ? this.props.usersInStore.map((value) =><ListItemSaga name={value.name} id={value.id}  key={value.id}/>)
                    : <Text>Нажмите кнопку "Загрузить"</Text> }
                </ScrollView>
                
               
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
   // console.log('state sagaScreen:',state)
    return {
       usersInStore: state.users.fetchUsers,
       loading: state.app.loading,
    }
}
const mapDispatchToProps = (dispatch) => ({
    getUserFromSaga: ()=>{dispatch(getUserFromSaga())},
    cleanList: () => {dispatch(cleanUserList())}
    
})


export default connect (mapStateToProps,mapDispatchToProps)(SagaScreen)

