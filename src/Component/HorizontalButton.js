import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { lightGrey, _Yellow } from '../Colors';

const _HorizontalButton = (props) => {
    return (
        <View style={[styles.horizontalBotton, props.styles]}>
        <TouchableOpacity
        onPress={props.todayClick}
        >
    <Text style={props.todayClicked ? [styles.todayButton,{color:_Yellow}]:[styles.todayButton]}>{props.today}</Text>
    {/* <View style={Platform.OS ==='ios'? [styles.bottomBorder,{top:37}]:[styles.bottomBorder]}></View> */}
            </TouchableOpacity>
            <TouchableOpacity
             onPress={props.tomorrowClick}
            >
        <Text style={props.tomorrowClicked ? [styles.todayButton,props.tomorrowButtonStyles,{color:_Yellow}]:[styles.todayButton,props.tomorrowButtonStyles]}>{props.tomorrow}</Text>
        {/* <View style={Platform.OS ==='ios'? [styles.bottomBorder,{top:37}]:[styles.bottomBorder]}></View> */}
            </TouchableOpacity>
            <TouchableOpacity
             onPress={props.Day1Click}
            >
    <Text style={props.Day1Clicked ? [styles.todayButton,props.Day1ButtonStyles,{color:_Yellow}]:[styles.todayButton,props.Day1ButtonStyles]}>{props.specificDay1}</Text>
    {/* <View style={Platform.OS ==='ios'? [styles.bottomBorder,{top:37}]:[styles.bottomBorder]}></View> */}
            </TouchableOpacity>
            <TouchableOpacity
             onPress={props.Day2Click}
            >
    <Text style={props.Day2Clicked ?[styles.todayButton,props.Day2ButtonStyles,{color:_Yellow}]:[styles.todayButton,props.Day2ButtonStyles]}>{props.specificDay2}</Text>
    {/* <View style={Platform.OS ==='ios'? [styles.bottomBorder,{top:37}]:[styles.bottomBorder]}></View> */}
            </TouchableOpacity>
        </View>
    )
}
export default _HorizontalButton;
const styles = StyleSheet.create({
    horizontalBotton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: RFValue(20)
    },
    bottomBorder:{
        position:'absolute',
        width:'100%',
        borderBottomColor:_Yellow,
        borderBottomWidth:3,
        //top:34
        marginTop:RFValue(20)
    },
    todayButton:{
        color:lightGrey,
        fontSize:RFValue(12),
        fontWeight:'500'
    }
})