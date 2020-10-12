import { FETCH_LIST_SUCCESS } from "../types";

const InitialState = [];


export default (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_LIST_SUCCESS: {
            return action.payload;
        }
        default: return state
    }

}