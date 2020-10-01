const { ADD_REGION } = require("../actions/actionRegion");
import { GET_REGION } from './../actions/actionRegion';

 const reducer = (state = [], action) => {
    switch(action.type){
        case ADD_REGION: 
            return [...state,{value: action.value}]
        case GET_REGION: 
            return value

        default: return state
    }

}

export default reducer;