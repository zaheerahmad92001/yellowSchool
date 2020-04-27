import React ,{Component}from 'react';
import {StyleSheet}from 'react-native';
import { White, _Yellow, lightGrey, Red } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:White
    },
    content:{
        marginTop:RFValue(10),
        marginHorizontal:RFValue(15)
    },
    ConfirmView:{
flexDirection:'row',
justifyContent:'space-between'
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:_Yellow,
        borderBottomWidth:1,
        marginTop:RFValue(10)
    },
    text:{
        color:_Yellow,
        fontSize:RFValue(12),
        fontWeight:'500',
    },
    infoTextView:{
        marginTop:RFValue(10)
    },
    infoTextStyle:{
        color:lightGrey,
        fontWeight:'300',
        fontSize:RFValue(14),
    },
    ButtonView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(15)
    },
    buttonStyle:{
        backgroundColor:Red
    }
})