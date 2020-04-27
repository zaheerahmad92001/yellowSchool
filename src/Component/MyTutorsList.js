import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native'
import { White, Black, lightGrey, lightYellow, _Yellow } from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Thumbnail } from 'native-base';
import _Button from './_Button';
const _MyTutorsList = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Thumbnail circular
                    style={{ alignSelf: 'flex-start' }}
                    source={require('../Assets/download.jpeg')}
                />
                <View style={styles.nameView}>
                <Text style={styles.nameHeading}>{props.item.name}</Text>
    <Text style={styles.hoursAvailable}>{props.item.availableHours}</Text>
                </View>
                
            </View>
            <View style={styles.buttonView}>
                <_Button
                onPress={props.ScheduleLesson}
                textStyle={{color:_Yellow}}
                styles={styles.buttonStyle}
                textButton={'Schedule lesson'}
                />
            </View>
        </View>
    )
}
export default _MyTutorsList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: White,
        borderRadius: RFValue(5),
        padding: RFValue(15),
        marginVertical:RFValue(15)
    },
    content: {
        flexDirection: 'row',
        
    },
    nameView: {
        marginHorizontal: RFValue(13),
        marginTop: RFValue(7)
    },
    nameHeading: {
        fontSize: RFValue(16),
        fontWeight: 'bold',
        color: Black
    },
    hoursAvailable: {
        marginTop: RFValue(3),
        color: lightGrey,
        fontWeight: "500",
        fontSize: RFValue(12)
    },
    buttonView: {
        marginTop:RFValue(15),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle:{
        backgroundColor:lightYellow,
        width:'100%'
    }

})