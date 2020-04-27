import React,{Component}from 'react';
import {StyleSheet ,Dimensions}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow,lightGrey } from '../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        //marginTop:RFValue(10)
    },
    paymentHistory:{
        color:_Yellow,
        fontWeight:'500',
        fontSize:RFValue(20),
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:0.5,
        marginTop:RFValue(20)
    },
    content:{
        width:'60%',
        marginTop:RFValue(15)
    },
    billingInfo:{
        color:_Yellow,
        fontSize:RFValue(12),
        fontWeight:'500',

    },
    findFirsTutor:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(15)
    }
})