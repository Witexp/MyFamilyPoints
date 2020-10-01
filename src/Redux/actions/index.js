import {ADD_REGION} from '../types'

export const addRegion = (value) => {
    console.log('Регион в STORE!!!', value)
    return {
        type: ADD_REGION,
        payload: value
    }
}
