import React,{Component}from 'react';
import {StyleSheet}from 'react-native';
import { White, _Yellow, Black, offWhite } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:offWhite
      // backgroundColor:White
    },
   
    content:{
       // flex:8.5,
        marginTop:RFValue(20),
        marginBottom:RFValue(5),
        marginHorizontal:RFValue(20)
    },
    upCommingLessonView:{
        backgroundColor:_Yellow,
        paddingLeft:RFValue(15),
        paddingRight:RFValue(15),
        paddingTop:RFValue(15),
        paddingBottom:RFValue(35),
        borderRadius:RFValue(5),

    },
    tomorrowText:{
        color:White,
        fontSize:RFValue(12),
        fontWeight:'700',

    },
    upCommingBox:{
        flexDirection:'row',
        marginTop:RFValue(15),
        justifyContent:'space-between',
    },
    LessonWith:{
        color:Black,
        fontSize:RFValue(16),
        fontWeight:'bold',
    },
    buttonView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(15)
    },
    availableTutors:{
        marginTop:RFValue(15)
    },
    myTutors:{
        color:_Yellow,
        fontWeight:'500',
        fontSize:RFValue(14),

    }

   
})