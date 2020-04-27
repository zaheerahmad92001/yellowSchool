import React ,{Component}from 'react';
import {StyleSheet,Dimensions, YellowBox}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow,White, lightGreen, lightGrey, darkYellow, Black, Red } from '../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
       // marginTop:RFValue(0),
    },
    notificationText:{
        color:Black,
        fontWeight:'300',
        fontSize:RFValue(16),
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:0.5,
        marginTop:RFValue(20)
    },
    SectionHeaderStyle: {
        fontSize:RFValue(14),
        color:Black,
        fontWeight:'500',
        marginBottom:RFValue(10)
      },
      ButtonView:{
          marginTop:RFValue(5),
          justifyContent:'center',
          alignItems:'center',

      },
      UnsubButtonView:{
        marginTop:RFValue(15),
        justifyContent:'center',
        alignItems:'center',
        marginBottom:RFValue(30)        
      },
      UnsubscribeButton:{
          backgroundColor:White,
          borderColor:Red,
          borderWidth:1
      }
})