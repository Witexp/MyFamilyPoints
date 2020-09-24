import React, { Component } from 'react'
import { Text, View, TextInput,Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { styles } from '../../styles'

class Points   extends Component {
    state = {
        value: '',
        valueInStor: ''
    }



    render(props){
        
    //     _storeData = async (value) => {
    //     try {
    //       await AsyncStorage.setItem(
    //         '@region',
    //         [value]
    //       );
    //       console.log('asyncStorage', value)
    //       this.setState({value: ''})
    //     } catch (error) {
    //       // Error saving data
    //     }
    //   };
    console.log('Points props', this.props)
  
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
          console.log('asyncStorage', value)
        } catch (e) {
          // saving error
        }
      }
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key');
          if (value !== null) {
            // We have data!!
            this.setState({valueInStor: value})
            console.log(value);
          }
        } catch (error) {
          // Error retrieving data
        }
      };

      const getRegionfromHome = () => {
          this.setState({value: this.props.route.params.region})
      }
      

      const { value, valueInStor } = this.state

    return (
        <View style={styles.center}>

            
            <Text style={styles.h1}> Screen Points </Text>

            <View style={styles.button}>
                <Button title="Получить регион" onPress={() => getRegionfromHome()}/>
            </View>
            <View style={styles.inputView}>
              <TextInput 
                style={styles.textInput}
                value={value}
                placeholder="Введите..."
                onChangeText={(text) => {this.setState({value: text})} }
            />
            <Button title="Сохранить" onPress={() => storeData(value)}/>  
            </View>
            <View style={styles.button}>
                <Button title="Получить из хранилища" onPress={() => {getData()}}/> 
            </View>
            <Text>{valueInStor}</Text> 
            
        </View>
    )
   
}}  
    
    

export default Points
