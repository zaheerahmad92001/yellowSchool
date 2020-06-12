import {USER} from '../Actions/types';
const initialState ={
    UserInfo:[]
}
const User = (state = initialState, action)=>{
    switch(action.type){
        case USER :
            return{
                ...state,
                UserInfo:action.payload
            };
            default :
            return state
    }
}
export default User;