import {USER}from '../Actions/types';
export const UserInfo =(data)=>{
    return{
    type:USER,
    payload:data
    }
}
