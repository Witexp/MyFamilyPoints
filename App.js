import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import {rootReducer} from './src/Redux/reducers/rootReducer'


import { styles } from './src/styles'
import Home from './src/screens/stack/Home';  
import Location from './src/screens/stack/Location'
import Lev from './src/screens/tab/Lev';
import Polina from './src/screens/tab/Polina';
import Sonya from './src/screens/tab/Sonya';
import About from './src/screens/drawer/About';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncDataFetch from './src/screens/stack/AsyncDataFetch';



 

// location = (state = []) =>{
 
//     return state;
    
// } 

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  bottomPointTabs = (props) => {
    return (
    <Tab.Navigator>
      <Tab.Screen name='Lev' component={Lev} />
      <Tab.Screen name='Polina' component={Polina} />
      <Tab.Screen name='Sonya' component={Sonya} />
    </Tab.Navigator>
    )
  } 

  homeStack = (props) => {
    return(
      <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
              headerRight: () => (
                <TouchableOpacity style={{paddingHorizontal: 10}} onPress={()=> props.navigation.toggleDrawer()}>
                  <Icon name="ios-menu" size={30} color="#4F8EF7" />
                </TouchableOpacity>
                
              )
            }}
          />
          <Stack.Screen name="Location" component={Location}/>
          <Stack.Screen name="ChildPoints" children={this.bottomPointTabs}/>
          <Stack.Screen name="About" component={About}/>
      </Stack.Navigator>
    )
  }

  render() {
    
    console.log('props App',this.props);
    return (
      <Provider store={store}>
        <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.homeStack}/>
          <Drawer.Screen name="AsyncDataFetch" component={AsyncDataFetch}/>
          <Drawer.Screen name="Location" component={Location}/>
          <Drawer.Screen name="About" component={About}/>
        </Drawer.Navigator>
      </NavigationContainer>
      </Provider>
 
    )
  }
}

export default App;
