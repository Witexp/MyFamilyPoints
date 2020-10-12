import { combineReducers } from 'redux'
import AddRegionReducer from './AddRegionReducer'
import getfetch from './getfetch'

export const rootReducer = combineReducers({
    regioninstore: AddRegionReducer,
    getfetch,
})