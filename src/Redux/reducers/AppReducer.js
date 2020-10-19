import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT,  HIDE_ALERT} from "../types";

intialState = {
    loading: false,
    alert: null,
}

export const appReducer = (state = intialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true}
        case HIDE_LOADER: 
            return {...state, loading: false}
        case SHOW_ALERT:
            return { ...state, alert: action.payload}
        case HIDE_ALERT: 
            return {...state, loading: null}
    
        default:
            return state;
    }
}

export default appReducer