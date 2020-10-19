import React, { Component } from 'react'
import { Text, View, Button, ActivityIndicator,Alert } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../../styles'
import Listcard from './Listcard'

import {GetList, showAlert} from '../../Redux/actions'



class AsyncDataFetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
             data: []
        }
    }
    

    buttonDownload = async () => {
         try {
            let response = await fetch('https://jsonplaceholder.typicode.com/albums?userId=1');
            let json = await response.json();
            console.log(json)
            this.setState({data: json})
          } catch (error) {
            console.error(error);
          }
    }

   createAlert = (text) =>
    Alert.alert(
      "Alert",
      `${text}`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    

   
       

    render() {
        //console.log(this.props)
       

        if (this.props.loading) {
            return( 
                <View style={styles.center}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
                
            )
        }
        return (
            <View style={styles.center}>
                <Text style={styles.h2}> Fetch Data userID: 1 </Text>
                {this.props.alert && this.createAlert('Alert из редакс')}
                <Button title='alert' onPress={() => this.createAlert('Сообщение для Alert')}></Button>
                {!this.props.fetchData.length ? <Button title='Загрузить' onPress={this.props.onGetList}/>
                :  this.props.fetchData.map((item)=><Listcard title={item.title} key={item.id}/>)}
                
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    //console.log(state.getfetch)
    return {
        fetchData: state.getfetch.fetchList,
        loading: state.app.loading,
        alert: state.app.alert
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetList: () => {
        dispatch(GetList())
    },
    showAlert: () => { dispatch(showAlert('тест'))}
})

export default connect(mapStateToProps, mapDispatchToProps) (AsyncDataFetch)


