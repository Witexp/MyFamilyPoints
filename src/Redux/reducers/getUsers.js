import { GET_USERS_SAGA } from "../types";

const initialState = {
    fetchUsers: []
}

export default (state = initialState, action)=>{
    console.log("Get_User reducer")
    switch (action.type) {
        case GET_USERS_SAGA:
            return {...state, fetchUsers: action.payload };
        default:
            return state;
    }
}