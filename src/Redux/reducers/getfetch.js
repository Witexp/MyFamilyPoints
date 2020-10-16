import { FETCH_LIST_SUCCESS } from "../types";

const InitialState = {
    fetchList: [],
};


export default (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_LIST_SUCCESS: {
            return {...state, fetchList: action.payload };
        }
        default: return state
    }

}