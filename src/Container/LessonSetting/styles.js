import React,{Component}from 'react';
import {StyleSheet ,Dimensions}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow,lightGrey, Black } from '../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        //marginTop:RFValue(10)
    },
    lessonSetting:{
        color:_Yellow,
        fontWeight:'500',
        fontSize:RFValue(16),
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:0.5,
        marginTop:RFValue(20)
    },
    autoConfirmation:{
        marginTop:RFValue(15),
    },
    autoConfirmationText:{
        color:Black,
        fontWeight:"500",
        fontSize:RFValue(14)
    },
    instructions:{
        color:Black,
        fontSize:RFValue(12),
        fontWeight:'300',
    },
    circleIcon:{
        fontSize: RFValue(20),
         color: _Yellow
    },
    manuallyText:{
    marginLeft:RFValue(7),
    color:Black,
    fontWeight:"300",
    fontSize:RFValue(12)
    },
    buttonStyle:{
        marginTop:RFValue(10)
    },
    saveCard:{
        marginLeft:0,
        marginRight:0,
        marginTop:RFValue(10),
        borderRadius:RFValue(5),
        height:screenHeight*0.05,
        width:screenWidth*0.40,
        marginBottom:RFValue(20)
    }
   
})