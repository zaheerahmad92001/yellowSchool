import React,{Component}from 'react';
import {StyleSheet,Dimensions}from 'react-native';
import { White, _Yellow, Black, offWhite, lightGrey } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const {height:screenHeight,width:screenWidth}= Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:White,
    },
    content:{
        height:screenHeight*0.87,
        marginTop:RFValue(20),
        marginHorizontal:RFValue(20)
    },
    circle:{
        width:RFValue(60),
        height:RFValue(60),
        borderRadius:RFValue(60/2),
        backgroundColor:_Yellow,
        alignItems:'center',
        justifyContent:'center'
    },
    NameBox:{
       color:White,
       fontSize:RFValue(25),
       fontWeight:'400', 
    },
    nameStyle:{
        color:_Yellow,
        fontSize:RFValue(16),
        fontWeight:'bold',
    },
    settingView:{
        marginTop:RFValue(25),
        alignItems:'center',
         flexDirection:'row',
         justifyContent:'space-between',
    },
    rightSideText:{
        fontSize:RFValue(12),
        fontWeight:'400',
        color:Black,
    },
    leftSideText:{
        color:_Yellow,

    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:0.5,
        marginTop:RFValue(20)
    },
    version:{
        fontWeight:'400',
        fontSize:RFValue(12),
        color:lightGrey,
    }
})