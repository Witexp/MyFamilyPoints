import { combineReducers } from 'redux'
import AddRegionReducer from './AddRegionReducer'
import getfetch from './getfetch'
import AppReducer from './AppReducer'
import getPoint from './getPoint'
import getUsers from './getUsers'

export const rootReducer = combineReducers({
    regioninstore: AddRegionReducer,
    app: AppReducer,
    getfetch,
    points: getPoint,
    users: getUsers,

    
})