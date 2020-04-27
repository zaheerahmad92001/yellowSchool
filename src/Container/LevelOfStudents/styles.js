import React, { Component } from 'react';
import {
   StyleSheet,
   Dimensions
} from 'react-native';
import styles from './styles';
import { Content, Thumbnail, Icon } from 'native-base';
import { _Yellow, White } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {height:screenHeight,width:screenWidth}= Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:White
    },
    content:{
        flex:1,
        marginHorizontal:RFValue(15),
        marginTop:RFValue(25)
    }
})