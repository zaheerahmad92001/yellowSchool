import React ,{Component}from 'react';
import{View,Text,StyleSheet}from 'react-native';
import { lightGrey, _Yellow } from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    oneHourSlot:{
        color:lightGrey,
        fontSize:RFValue(12),
        fontWeight:'500',marginBottom:RFValue(3)
    },
    contentView:{
        marginTop:RFValue(20)
    },
    localTime:{
        color:_Yellow,
        fontSize:RFValue(13),
        fontWeight:'500',
    }
})