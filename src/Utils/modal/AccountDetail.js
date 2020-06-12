import React,{Component}from 'react';
import { requestHandler } from '../requestHandler';
export default class AccountDetail extends Component{
    static account(email,firstName,lastName,phoneNumber,skypeId,timeZone,image,socialNetworks){
        // console.log('email',email,'fname',firstName,'lname',lastName,'phone',phoneNumber,'sype',skypeId
        // ,'tiem',timeZone,'image',image,'social',socialNetworks)
        return requestHandler('accountDetail',{
            email:email,
            firstName:firstName,
            lastName:lastName,
            phoneNumber:phoneNumber,
            skypeId:skypeId,
            timeZone:timeZone,
            image:image,
            socialNetworks
        })
    }
}