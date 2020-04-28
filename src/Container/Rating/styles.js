import React, { Component } from 'react';
import {
   StyleSheet,
   Dimensions
} from 'react-native';
import styles from './styles';
import { Content, Thumbnail, Icon } from 'native-base';
import { _Yellow, White, Black } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const {height:screenHeight,width:screenWidth}= Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:_Yellow
    },
    empityView:{
    flex:2.5
    },
    content:{
        flex:7.5,
        //marginTop:RFValue(15),
        marginHorizontal:RFValue(25)
    },
    question:{
        color:Black,
        fontWeight:'600',
        fontSize:RFValue(16),
    },
    instrution:{
        marginTop:RFValue(5),
        color:White,
        fontSize:RFValue(12),
        fontWeight:'500',
    }
})