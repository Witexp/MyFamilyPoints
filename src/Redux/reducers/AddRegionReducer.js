import {ADD_REGION} from '../types'

const INITIAL_STATE = {
    region: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log('action', action)
    switch (action.type){
        case ADD_REGION:
            return {
                ...state,
                region: action.payload
            }
        default: 
            return state
    }
}