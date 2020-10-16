import React, { Component } from 'react'
import { Text, View, Button, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../../styles'
import Listcard from './Listcard'

import {GetList} from '../../Redux/actions'



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
    

   
       

    render() {
        console.log(this.props)

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
                {!this.props.fetchData.length ? <Button title='Загрузить' onPress={this.props.onGetList}/>
                :  this.props.fetchData.map((item)=><Listcard title={item.title} key={item.id}/>)}
                
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.getfetch)
    return {
        fetchData: state.getfetch.fetchList,
        loading: state.app.loading,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetList: () => {
        dispatch(GetList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (AsyncDataFetch)


