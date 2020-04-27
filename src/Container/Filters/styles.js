import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import { White, _Yellow, lightGrey, Black } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: White
    },
    content: {
        marginTop: RFValue(20),
        marginHorizontal: RFValue(15),
        flex: 8.5
    },
    FilterText: {
        color: _Yellow,
        fontWeight: '500',
        fontSize: RFValue(18),

    },
    bottomBorder: {
        width: '100%',
        borderBottomColor: lightGrey,
        borderBottomWidth: 0.5,
        marginTop: RFValue(20)
    },
    PriceView: {
        marginTop: RFValue(25),
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    priceText: {
        color: Black,
        fontSize: RFValue(14),
        fontWeight: '300'
    },
    price: {
        color: _Yellow,
        fontWeight: '500',
        fontSize: RFValue(14)
    },
    seekbarViwe: {
        marginTop: RFValue(30),
        flexDirection: 'row',
        // justifyContent:"space-between",
        alignItems: 'center'
    },
    circle: {
        width: RFValue(15),
        height: RFValue(15),
        borderRadius: RFValue(15 / 2),
        backgroundColor: White,
        borderColor: _Yellow,
        borderWidth: 1
    },
    seekFilter: {
        width: '70%',
        borderBottomColor: _Yellow,
        borderBottomWidth: 3,

    },
    seekFilterLight: {
        width: '17%',
        borderBottomColor: lightGrey,
        borderBottomWidth: 1,
    },
    SpeakerView: {
        marginTop: RFValue(30)
    },
    nativeText: {
        fontWeight: '300',
        fontSize: RFValue(14),
        color: Black,
    },
    SwithView: {
        flexDirection: 'row',
        marginTop: RFValue(10),
        justifyContent:'space-between',
    },
    switchText:{
        color:lightGrey,
        fontSize:RFValue(12),
        fontWeight:'400'
    }
})