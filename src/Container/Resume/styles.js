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
        backgroundColor:White
    },
    content:{
        flex:1
    },
    subContent:{
    // flex:1,
    marginHorizontal:RFValue(15),
    marginTop:RFValue(15)
    },
    headingText:{
        fontWeight:'bold',
        color:Black,
        fontSize:RFValue(16)
    },
    inputStyle:{
        fontSize:RFValue(12),
        fontWeight:'300',
        
    }
})
