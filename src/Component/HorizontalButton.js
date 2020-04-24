import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { lightGrey, _Yellow, Black } from '../Colors';

const _HorizontalButton = (props) => {
    return (
        props.from === 'slotAvailablity' ?
            <View style={[styles.horizontalBotton, props.styles]}>
                <TouchableOpacity
                    style={{ paddingVertical: RFValue(10) }}
                    onPress={props.firstButtonPress}
                >
                    <Text style={props.firstButtonClicked ? [styles.todayButton, { color: _Yellow }] : [styles.todayButton]}>{props.firstButtonHeading}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ paddingVertical: RFValue(10) }}
                    onPress={props.secondButtonPress}
                >
                    <Text style={props.secondButtonClicked ? [styles.todayButton, { color: _Yellow }] : [styles.todayButton,]}>{props.secondButtonHeading}</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ paddingVertical: RFValue(10) }}
                    onPress={props.thirdButtonPress}
                >
                    <Text style={props.thirdButtonClicked ? [styles.todayButton, { color: _Yellow }] : [styles.todayButton,]}>{props.thirdButtonHeading}</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ paddingVertical: RFValue(10) }}
                    onPress={props.forthButtonPress}
                >
                    <Text style={props.forthButtonClicked ? [styles.todayButton, { color: _Yellow }] : [styles.todayButton,]}>{props.forthButtonHeading}</Text>

                </TouchableOpacity>
            </View> :

            props.from === 'Mysettings' ?
                <View style={[styles.horizontalBotton,{marginTop:0}]}>

                    <View style={styles.setting}>
                        <TouchableOpacity
                            style={{ paddingVertical: RFValue(10) }}
                            onPress={props.firstButtonPress}
                        >
                            <Text style={props.firstButtonClicked ? [styles.todayButton, { color: Black }] : [styles.todayButton]}>{props.firstButtonHeading}</Text>
                             
                        </TouchableOpacity>
                        {props.firstButtonClicked ?
                        <View style={styles.bottomBorder}></View>:null}
                    </View>

                    <View style={styles.setting}>
                        <TouchableOpacity
                            style={{ paddingVertical: RFValue(10) }}
                            onPress={props.secondButtonPress}
                        >
                            <Text style={props.secondButtonClicked ? [styles.todayButton, { color: Black }] : [styles.todayButton,]}>{props.secondButtonHeading}</Text>
                            {/* <View style={Platform.OS ==='ios'? [styles.bottomBorder,{top:37}]:[styles.bottomBorder]}></View> */}
                        </TouchableOpacity>
                        {props.secondButtonClicked ?
                        <View style={styles.bottomBorder}></View>:null}
                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity
                            style={{ paddingVertical: RFValue(10) }}
                            onPress={props.thirdButtonPress}>
                            <Text style={props.thirdButtonClicked ? [styles.todayButton, { color: Black }] : [styles.todayButton,]}>{props.thirdButtonHeading}</Text>
                        </TouchableOpacity>
                        {props.thirdButtonClicked ?
                        <View style={styles.bottomBorder}></View>:null}
                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity
                            style={{ paddingVertical: RFValue(10) }}
                            onPress={props.forthButtonPress}
                        >
                            <Text style={props.forthButtonClicked ? [styles.todayButton, { color: Black }] : [styles.todayButton,]}>{props.forthButtonHeading}</Text>
                            {/* <View style={Platform.OS ==='ios'? [styles.bottomBorder,{top:37}]:[styles.bottomBorder]}></View> */}
                        </TouchableOpacity>
                      {props.forthButtonClicked ?
                        <View style={styles.bottomBorder}></View>:null}
                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity
                            style={{ paddingVertical: RFValue(10) }}
                            onPress={props.fifthButtonPress}
                        >
                            <Text style={props.fifthButtonClicked ? [styles.todayButton, { color: Black }] : [styles.todayButton]}>{props.fifthButtonHeading}</Text>
                            {/* <View style={Platform.OS ==='ios'? [styles.bottomBorder,{top:37}]:[styles.bottomBorder]}></View> */}
                        </TouchableOpacity>
                        {props.fifthButtonClicked ?
                        <View style={styles.bottomBorder}></View>:null}
                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity
                            style={{ paddingVertical: RFValue(10) }}
                            onPress={props.sixButtonPress}
                        >
                            <Text style={props.sixButtonClicked ? [styles.todayButton, { color: Black }] : [styles.todayButton]}>{props.sixButtonHeading}</Text>
                            {/* <View style={Platform.OS ==='ios'? [styles.bottomBorder,{top:37}]:[styles.bottomBorder]}></View> */}
                        </TouchableOpacity>
                        {props.sixButtonClicked ?
                        <View style={styles.bottomBorder}></View>:null}
                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity
                            style={{ paddingVertical: RFValue(10) }}
                            onPress={props.seventhButtonPress}
                        >
                            <Text style={props.seventhButtonClicked ? [styles.todayButton, { color: Black }] : [styles.todayButton]}>{props.seventhButtonHeading}</Text>
                            {/* <View style={Platform.OS ==='ios'? [styles.bottomBorder,{top:37}]:[styles.bottomBorder]}></View> */}
                        </TouchableOpacity>
                        {props.seventhButtonClicked ?
                        <View style={styles.bottomBorder}></View>:null}
                    </View>
                   
                </View>


                : null
    )
}
export default _HorizontalButton;
const styles = StyleSheet.create({
    horizontalBotton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: RFValue(10)
    },
    bottomBorder: {

        width: '100%',
        borderBottomColor: _Yellow,
        borderBottomWidth: 3,
        //top:34
        // marginTop: RFValue(20)
    },
    todayButton: {
        color: lightGrey,
        fontSize: RFValue(12),
        fontWeight: '500'
    },
    setting: {
        marginHorizontal: RFValue(10)
    }
})