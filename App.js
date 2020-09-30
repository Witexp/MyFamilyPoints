import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import { styles } from './src/styles'
import Home from './src/screens/stack/Home';
import Points from './src/screens/stack/Points'


 

// location = (state = []) =>{
 
//     return state;
    
// } 

//const store = createStore(location);



class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  
  
  render() {
    const Stack = createStackNavigator();
    console.log('props App',this.props);
    return (
      // <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Points" component={Points}/>
          </Stack.Navigator>
        </NavigationContainer>
      //</Provider>
    )
  }
}

export default App;
