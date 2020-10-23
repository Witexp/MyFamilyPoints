import { GET_POINT_LEVA } from "../types";

const InitialState = {
    points: [],
};

export default (state = InitialState, action) =>{
    switch (action.type) {
        case GET_POINT_LEVA:{
            return {...state, points: action.payload};
        }
    
        default:
            return state;
    }
}