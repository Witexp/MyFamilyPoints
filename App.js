import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import { styles } from './src/styles'
import Home from './src/screens/stack/Home';
import Points from './src/screens/stack/Points'


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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Points" component={Points}/>
        </Stack.Navigator>
        
      </NavigationContainer>
    )
  }
}

export default App
