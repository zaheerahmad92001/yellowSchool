import React ,{Component}from 'react';
import {StyleSheet,Dimensions, YellowBox}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow,White, lightGreen, lightGrey, darkYellow, Black, offWhite } from '../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
       // marginTop:RFValue(0),
    },
    googleCalendar:{
        color:Black,
        fontWeight:'300',
        fontSize:RFValue(14),
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:0.5,
        marginTop:RFValue(20)
    },
    circle:{
        width:RFValue(70),
        height:RFValue(70),
        borderRadius:RFValue(70/2),
        backgroundColor:offWhite,
        
    },
    connectWithGoogle:{
        color:Black,
        fontWeight:'300',
        fontSize:RFValue(12),
    },
    buttonStyle:{
        marginTop:RFValue(10)
    },
    ButtonView:{
        marginLeft:0,
        marginRight:0,
        marginTop:RFValue(10),
        borderRadius:RFValue(5),
        height:screenHeight*0.05,
        width:screenWidth*0.7
    }
})