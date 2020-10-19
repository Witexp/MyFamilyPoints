import {ADD_REGION, FETCH_LIST_SUCCESS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT} from '../types'

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

export const showLoader = () => {
    return{
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return{
        type: HIDE_LOADER
    }
}



export const showAlert = (text) => {
    return dispatch => {
        dispatch({type: SHOW_ALERT, payload: text})

        setTimeout(() => {
            dispatch(hideAlert())
        }, 4000)
    }
}

export const hideAlert = () => {
    return{
        type: HIDE_ALERT
    }
}




export const GetList = () => async (dispatch) => {
    dispatch(showLoader())
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/albums?userId=1');
        let json = await response.json();
        dispatch(getListAction(json)) 
        dispatch(showAlert('test getList')) 
        dispatch(hideLoader()) 
    }
    catch(err){
        dispatch({type: 'REDUX_ERROR', payload: err})
    }
    
  }
