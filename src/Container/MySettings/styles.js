import React, { Component } from 'react';
import { StyleSheet ,Dimensions} from 'react-native';
import { White } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: White
    },
    buttonStyle: {
        marginHorizontal: RFValue(5),
         height: screenHeight * 0.001,
         marginTop: RFValue(10)
    }
})