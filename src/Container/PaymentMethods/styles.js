import React ,{Component}from 'react';
import {StyleSheet,Dimensions, YellowBox}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow,White, lightGreen, lightGrey, darkYellow, Black } from '../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
       // marginTop:RFValue(0),
    },
    paymentText:{
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
    content:{
        marginTop:RFValue(20)
    },
    infoText:{
        color:Black,
        fontWeight:'300',
        fontSize:RFValue(12)
    },
    paymentCards:{
        flexDirection:'row',
        marginTop:RFValue(10),
        marginLeft:RFValue(5)
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
        width:screenWidth*0.35
    }
})