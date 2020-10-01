import {ADD_REGION, GET_REGION } from '../actions/actionRegion'

export const addRegion = (value) => {
    return {
        type: ADD_REGION,
        value: 'added Region'
    }
}

export const getRegion = () => {
    return {
        type: GET_REGION,
        value
    }
}