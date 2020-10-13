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

export const getListAction = (value) => {
    return {
        type: FETCH_LIST_SUCCESS, 
        payload: value 
    }
}





export const GetList = () => async (dispatch) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/albums?userId=1');
    let json = await response.json();
    dispatch(getListAction(json))
        
     
  }
