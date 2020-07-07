import React,{Component}from 'react';
import { requestHandler } from '../requestHandler';
export default class AccountDetail extends Component{

     static account(email,firstName,lastName,phoneNumber,skypeId,timeZone,image,socialNetworks)
    // static account(data)
{
        
        return requestHandler('accountDetail',
        {
           // data: subiData
            email:email,
            firstName:firstName,
            lastName:lastName,
            phoneNumber:phoneNumber,
            skypeId:skypeId,
            timeZone:timeZone,
            image:image,
            socialNetworks
        })
    };
    static changePassword(password){
        return requestHandler('changePassword',{
            password:password
        })
    };
    static deleteAccount(){
        return requestHandler('deleteAccount')
    }

}