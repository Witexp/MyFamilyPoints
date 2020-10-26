import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { getUserAction } from '../../Redux/actions'
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



        return (
            <View style={styles.center}>
                <Text style={styles.h2}> SagaScreen (users) </Text>
                <ScrollView>
                    {this.state.users.length ? this.state.users.map((value) =><ListItemSaga name={value.name} id={value.id}  key={value.id}/>)
                    : <Button title='Загрузить пользователей' onPress={() => this.props.getUserAction()}/> }
                </ScrollView>
                
               
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
   // console.log('state sagaScreen:',state)
    return {
       usersInStore: state.users.fetchUsers
    }
}
// const mapDispatchToProps = (dispatch) => ({
//     getUserinStore: ()=>{dispatch(getUserAction())}
// })


export default connect (mapStateToProps,{getUserAction})(SagaScreen)

