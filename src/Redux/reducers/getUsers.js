import { CLEAN_USER_LIST, GET_USERS_SAGA , GET_USERS_THIINC} from "../types";

const initialState = {
    fetchUsers: []
}

export default (state = initialState, action)=>{
    console.log("Get_User reducer")
    switch (action.type) {
        case GET_USERS_THIINC:
            return {...state, fetchUsers: action.payload };
        case CLEAN_USER_LIST:
            return {fetchUsers: []}
        default:
            return state;
    }
}