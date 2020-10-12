import {ADD_REGION, FETCH_LIST_SUCCESS} from '../types'

export const addRegion = (value) => {
    console.log('Регион в STORE!!!', value)
    return {
        type: ADD_REGION,
        payload: value
    }
}


var mockApiData = [
    {
        id: 1,
        title: 'list item 1'
    },
    {
        id: 2,
        title: 'list item 2'
    },
    {
        id: 3,
        title: 'list item 3'
    },
]

export const GetList = () => dispatch => {
        setTimeout(() => {
            console.log('i got List')
            dispatch({type: FETCH_LIST_SUCCESS, payload: mockApiData })
        },2000)
     
  }
