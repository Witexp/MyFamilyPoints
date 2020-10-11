import { combineReducers } from 'redux'
import AddRegionReducer from './AddRegionReducer'

export const rootReducer = combineReducers({
    regioninstore: AddRegionReducer,
})