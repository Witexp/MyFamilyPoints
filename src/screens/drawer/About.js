import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../styles'

export class About extends Component {
    render() {
        return (
            <View style={[styles.center, styles.containerAbout]}>
                <Text style={styles.text}> Приложение для подсчета и отображения очков детей, набранных за прилежное поведение.</Text>
            </View>
        )
    }
}

export default About
