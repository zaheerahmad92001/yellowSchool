import React, {Component}from 'react';
import {
View,
Text,
TextInput,
StyleSheet
}from 'react-native';
import { Black, BorderBottom, _Yellow } from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';

const _TextInput =(props)=>{
    return(
        <View>
            <TextInput
           style={[styles.inputStyle,props.inputBox]}
           placeholder={props.placeholder}
           placeholderTextColor={props.squarInput? props.placeholderTextColor: '#979797'}
           onChangeText={props.onChangeText}
           value={props.value}
           autoFocus={props.autoFocus}
           secureTextEntry={props.secureTextEntry}
            />
         { props.squarInput ? null:
            <View style={styles.bottomBorder}></View>
            }
        </View>
    )
}
export default _TextInput;
const styles = StyleSheet.create({
    inputStyle:{
        paddingVertical:RFValue(5),
        fontSize:RFValue(14),
    },
    bottomBorder:{
        width:'96%',
        borderBottomColor:BorderBottom,
        borderBottomWidth:0.5
    }
})
