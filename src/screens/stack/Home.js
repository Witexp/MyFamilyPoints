import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import Points from './Points'



const Home = (props) => {
    console.log("props Home", props)
    return (

        <View>
            <Text> Home Screen </Text>
            <Button title="Go to Ponts" onPress={() => (props.navigation.navigate('Points'))}/>
        </View>
    )
    
}

export default Home
