import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'


import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ReduxThunk from 'redux-thunk'
import {rootReducer} from './src/Redux/reducers/rootReducer'
import Navigator from './src/Navigator'







 

// location = (state = []) =>{
 
//     return state;
    
// } 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));




class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
 

  render() {
    
    //console.log('props App',this.props);
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigator/>
      </NavigationContainer>
      </Provider>
 
    )
  }
}

export default App;
