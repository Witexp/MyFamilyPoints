import { combineReducers } from 'redux'
import AddRegionReducer from './AddRegionReducer'
import getfetch from './getfetch'
import AppReducer from './AppReducer'

export const rootReducer = combineReducers({
    regioninstore: AddRegionReducer,
    app: AppReducer,
    getfetch,
    
})