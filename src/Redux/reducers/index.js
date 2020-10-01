import { combineReducers } from 'redux'
import AddRegionReducer from './AddRegionReducer'

export default combineReducers({
    regioninstore: AddRegionReducer,
})