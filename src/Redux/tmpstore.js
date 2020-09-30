import { createStore } from 'redux'


function regionApp(state = 0, action){
    switch (action.type){
        case 'ADD_REGION':
            return state
        case 'GET_REGION':
            return state
        default: 
            return state
        
    }
}

let store = createStore(regionApp)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'ADD_REGION'})

store.dispatch({type: 'GET_REGION'})