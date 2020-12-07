
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles'
import Home from './screens/stack/Home';  
import Location from './screens/stack/Location'
import Lev from './screens/tab/Lev';
import Polina from './screens/tab/Polina';
import Sonya from './screens/tab/Sonya';
import About from './screens/drawer/About';

import AsyncDataFetch from './screens/stack/AsyncDataFetch';
import SagaScreen from './screens/stack/SagaScreen';

import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {Login }from './screens/stack/Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default class Navigator extends Component {

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
              <Stack.Screen name="Location" 
                component={Location} 
                options = {this.OptionDefaultStack}
              />
              <Stack.Screen name="ChildPoints" 
                children={this.bottomPointTabs}
                options = {this.OptionDefaultStack}
              />
              <Stack.Screen name="About" component={About}/>
              <Stack.Screen name="LogIn" component={Login}/>
              
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
    
      SagaStack = (props) => {
        return (
          <Stack.Navigator>
            <Stack.Screen name="Saga screen" 
              component={SagaScreen}
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
        return (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.homeStack}  options={{ drawerLabel: 'Home' }}/>
          <Drawer.Screen name="AsyncDataFetch" children={this.DataFatchStack}/>
          <Drawer.Screen name="SagaScreen" children={this.SagaStack}/>
          <Drawer.Screen name="Location" children={this.LocationStack}/>
          <Drawer.Screen name="About" children={this.AboutStack}/>
      </Drawer.Navigator>
            
        )
    }
}




