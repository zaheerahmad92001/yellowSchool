import React,{Component}from 'react';
import {View, StyleSheet,Text}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {Icon}from 'native-base';
import { Black, lightGrey, _Yellow } from '../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
const _Notifications=(props)=>{
    console.log('checked',props.checked)
    return(
        <TouchableOpacity style={styles.notificationView}
        onPress={props.onSelect}>
            {props.checked ?
               <Icon
               name={'checksquareo'}
               type={'AntDesign'}
               style={{fontSize:RFValue(18),color:_Yellow,alignSelf:'flex-start'}}
               />:
               <Icon
               name={'checkbox-blank-outline'}
               type={'MaterialCommunityIcons'}
               style={{fontSize:RFValue(18),color:lightGrey,alignSelf:'flex-start'}} 
            /> }
            <View style={{paddingHorizontal:RFValue(10)}}>
             <Text style={styles.notificationHeader} >{props.item.value}</Text>
    <Text style={styles.subHeading}>{props.item.notification}</Text>
             </View>
            </TouchableOpacity>
    )
}
export default _Notifications;

const styles= StyleSheet.create({
    notificationView:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:RFValue(10)
    },
    notificationHeader:{
        marginLeft:RFValue(5),
        color:Black,
        fontWeight:'300',
        fontSize:RFValue(16)
    },
    subHeading:{
        fontWeight:'500',
        fontSize:RFValue(14),
        color:lightGrey,
        marginLeft:RFValue(5),
        marginTop:RFValue(1)
    }
})