import React ,{Componet}from 'react';
import{StyleSheet}from 'react-native';
import { White, _Yellow, Black } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    contentView:{
        flex:5,
        backgroundColor:_Yellow,
        borderTopRightRadius:RFValue(32),
        borderTopLeftRadius:RFValue(32),
    },
    content:{
        marginHorizontal:RFValue(35),
        marginTop:RFValue(30),
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        color:Black,
        fontSize:RFValue(14),
        fontWeight:'bold'
    },
    description:{
        color:White,
        fontWeight:'500',
        fontSize:RFValue(12),
      lineHeight:RFValue(17),
      marginTop:RFValue(10)
    },
    account:{
        color:White,
        fontWeight:'500',
        fontSize:RFValue(12),
      textAlign:'center'
    }
})