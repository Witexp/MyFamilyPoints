import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddlewre from 'redux-saga'
import { rootReducer } from './src/Redux/reducers/rootReducer'
import Navigator from './src/Navigator'
import { sagaWatcher } from './src/Redux/sagas'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/integration/react'




const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'regioninstore',
    'users',
    'points'
  ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const saga = createSagaMiddlewre();

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,saga)));
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk,saga)));

saga.run(sagaWatcher)

const persistor = persistStore(store)

class App extends Component {
  render() {
    
    //console.log('props App',this.props);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Navigator/>
          </NavigationContainer>
        </PersistGate>        
      </Provider>
 
    )
  }
}

export default App;
