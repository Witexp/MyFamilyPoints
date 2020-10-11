import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Listcard = (props) => {
    return (
        <View style={styles.listitem}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

export default Listcard

const styles = StyleSheet.create({
    listitem:{
        padding: 10,
        borderWidth: 1,
        borderColor:'grey',
        width: '80%',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
})
