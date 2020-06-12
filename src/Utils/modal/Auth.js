import React,{Component}from 'react';
import { requestHandler } from '../requestHandler';
export default class Auth extends Component{

    static register(email,password,name){
        return requestHandler('register',{
            email:email,
            password:password,
            name:name
        })
    };
    static login(email,password){
        return requestHandler('login',{
            email:email,
            password:password
        })
    };
    
}