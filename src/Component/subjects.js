import React,{Component}from 'react';
import {
    View,
    StyleSheet,
    Text
}from 'react-native';
import { Black, lightGrey } from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const _Subjects =(props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.Heading}>{props.item.name}</Text>
            <Text style={styles.description}>
            In this aspect, the paragraphs of a piece of prose differ from the stanzas 
            of verses of a poem. The stanza of a poem are usually of the same length and 
            pattern but paragraphs are long or short according to the amount of matter to be 
            expressed under each head.
            </Text>
        </View>
    )
}
export default _Subjects;
const styles=StyleSheet.create({
    container:{
marginBottom:RFValue(25)
    },
Heading:{
    color:Black,
    fontWeight:'bold',
    fontSize:RFValue(14),
},
description:{
    marginTop:RFValue(5),
    color:lightGrey,
    fontSize:RFValue(12),
    fontWeight:'500'
}
})