import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { styles } from '../../styles'
import Listcard from './Listcard'



export default class AsyncDataFetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: []
        }
    }
    

    componentDidMount= async () => {
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
        return (
            <View style={styles.center}>
                <Text> Fetch Data userID: 1 </Text>
                {this.state.data.map((item)=><Listcard title={item.title} key={item.id}/>)}
                
            </View>
        )
    }
}


