import React, { Component } from 'react';
import { StyleSheet ,Dimensions} from 'react-native';
import { White, _Yellow} from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const {height:screenHeight,width:screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: White
    },
    header: {
        width: screenWidth,
        height: screenHeight * 0.10,
        backgroundColor: _Yellow,
        borderBottomLeftRadius: RFValue(32),
        borderBottomRightRadius: RFValue(32),
    }
})