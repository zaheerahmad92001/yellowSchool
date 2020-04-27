import React,{Component}from 'react';
import {StyleSheet}from 'react-native';
import { White, _Yellow } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:White
    },
    Header:{
       flex:1,
       justifyContent:'flex-end',
       marginHorizontal:RFValue(20)
    },
    content:{
        flex:8.5,
        marginTop:RFValue(10),
        marginBottom:RFValue(5)
    },
    messageText:{
        fontSize:RFValue(20),
        fontWeight:'500',
        color:_Yellow
    }
})