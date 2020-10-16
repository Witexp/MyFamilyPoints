import { HIDE_LOADER, SHOW_LOADER } from "../types";

intialState = {
    loading: false
}

export const appReducer = (state = intialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true}
        case HIDE_LOADER: 
            return {...state, loading: false}
    
        default:
            return state;
    }
}

export default appReducer