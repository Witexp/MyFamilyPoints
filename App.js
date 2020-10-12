import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

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
              headerTitleAlign: 'center' ,
              headerRight: () => (
                <TouchableOpacity style={{paddingHorizontal: 10}} onPress={()=> props.navigation.toggleDrawer()}>
                  <Icon name="ios-menu" size={30} color="#4F8EF7" />
                </TouchableOpacity>
              ),
              
            }}
          />
          <Stack.Screen name="Location" component={Location} 
            options = {this.OptionDefaultStack}
          />
          <Stack.Screen name="ChildPoints" children={this.bottomPointTabs}/>
          <Stack.Screen name="About" component={About}/>
      </Stack.Navigator>
    )
  }

  OptionDefaultStack = (props) => ({
    headerTitleAlign: 'center' ,
    headerRight: () => (
      <TouchableOpacity style={{paddingHorizontal: 10}} onPress={()=> props.navigation.toggleDrawer()}>
        <Icon name="ios-menu" size={30} color="#4F8EF7" />
      </TouchableOpacity>
    ),
    headerLeft: () => (
    <TouchableOpacity style={{paddingHorizontal: 10}} onPress={()=> props.navigation.goBack()}>
      <Icon name="chevron-back-outline" size={30} color="#4F8EF7" />
    </TouchableOpacity>
  )})
  AboutStack = (props) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="About" 
          component={About}
          options = {this.OptionDefaultStack}
        />
      </Stack.Navigator>
    )
  }
  DataFatchStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Data Fetch" 
          component={AsyncDataFetch}
          options = {this.OptionDefaultStack}
        />
      </Stack.Navigator>
    )
  }
  LocationStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Location Save" 
          component={Location}
          options = {this.OptionDefaultStack}
        />
      </Stack.Navigator>
    )
  }

  render() {
    
    console.log('props App',this.props);
    return (
      <Provider store={store}>
        <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.homeStack}  options={{ drawerLabel: 'Home' }}/>
          <Drawer.Screen name="AsyncDataFetch" children={this.DataFatchStack}/>
          <Drawer.Screen name="Location" children={this.LocationStack}/>
          <Drawer.Screen name="About" children={this.AboutStack}/>
        </Drawer.Navigator>
      </NavigationContainer>
      </Provider>
 
    )
  }
}

export default App;
