import React,{Component}from 'react';
import {StyleSheet ,Dimensions}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow,lightGrey } from '../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        //marginTop:RFValue(10)
    },
    createPassword:{
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
    Heading:{
        color:_Yellow,
        fontSize:RFValue(12),
        fontWeight:'500'
    },
    inputStyle:{
        borderRadius:RFValue(5),
        borderWidth:1,
        borderColor:_Yellow,
        marginVertical:RFValue(10),
        paddingHorizontal:RFValue(10),
        marginBottom:RFValue(20),
        paddingVertical:RFValue(10)
    },
    content:{
        marginTop:RFValue(25)
    },
    buttonStyle:{
        //justifyContent:'center',
        //alignItems:'flex-start'
        marginTop:RFValue(10)
    },
    saveSetting:{
        marginLeft:0,
        marginRight:0,
        height:screenHeight*0.05,
        borderRadius:RFValue(5),
        width:screenWidth*0.40
    }
})