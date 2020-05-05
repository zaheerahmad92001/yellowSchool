import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { CardItem, Left, Thumbnail, Body, Right } from 'native-base';
import { Black, lightGrey } from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const _AllMessages = (props) => {
    return (
        <TouchableOpacity
        onPress={props.onPress}
        >
        <CardItem>
            <Left style={{ flex: 2,alignSelf: 'flex-start' }}>
                <Thumbnail circular
                    source={require('../Assets/download.jpeg')}
                />
            </Left>
            <Body style={{ flex: 7 ,marginTop:RFValue(5),marginLeft:RFValue(6)}}>
            <Text numberOfLines={1} style={styles.name}>{props.item.name}</Text>
    <Text numberOfLines={1} style={styles.messageText}>{props.item.message}</Text>
              
            </Body>
            <Right style={{ flex: 2, alignSelf: 'flex-start',marginTop:RFValue(5) }}>
                <Text style={styles.messageText}>5:40</Text>
            </Right>
        </CardItem>
        <View style={styles.bottomBorder}></View>
        </TouchableOpacity>
    )
}
export default _AllMessages;
const styles = StyleSheet.create({
    name:{
        color:Black,
        fontSize:RFValue(16),
        fontWeight:'700',

    },
    messageText:{
        color:lightGrey,
        fontWeight:'500',
        fontSize:RFValue(12),
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:0.5,
        marginTop:RFValue(10)
    },
})