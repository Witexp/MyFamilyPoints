import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'


export  const Login = props => {
    <Formik
        initialValues={{ email: ''}}
        onSubmit={values = console.log(values)}
    >
        {({ handleChange, handleBlure, handleSubmit, values})}(

        <View>
            <Text> Введите адрес </Text>
            <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlure('email')}
                value={values.email}
            />
            <Button title="Submit" onPress={handleSubmit}/>
        </View>

        )
      
    </Formik>
    
  
    
}
 
