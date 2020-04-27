import React, { Component, useState } from 'react';
import {

    StyleSheet,
    TextInput,
    Platform,
    Text,
    Dimensions,
} from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import { View, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountryPicker, { getAllCountries, getCallingCode, DEFAULT_THEME, } from 'react-native-country-picker-modal';
import { Black, White, _Yellow } from '../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


const ContactInput = (props) => {
    const [visible, setVisible] = useState(false)
    const switchVisible = () => setVisible(!visible)

    return (
        <View style={[styles.upperView, { backgroundColor: White, }]}>
            <TouchableOpacity
                style={{
                    flexDirection: 'row', backgroundColor: White,

                }}
                onPress={() => switchVisible()}>
                <CountryPicker
                    visible={false}
                    countryCode={props.cca2}
                    withCallingCode={true}
                    withAlphaFilter
                    withFilter
                    theme={{ flagSizeButton: RFValue(25) }}
                    onSelect={props.select}
                    containerButtonStyle={{ padding: 0, fontSize: RFValue(18), }}
                    {...{

                        modalProps: {
                            visible
                        },
                        onClose: () => setVisible(false),
                        onOpen: () => setVisible(true)
                    }}
                />

                <Text style={{ fontSize: RFValue(18), marginHorizontal: 10, marginTop: 5 }}>

                    +{props.callingCode}
                </Text>
            </TouchableOpacity>
            <View style={styles.inputStyle}>
                <TextInput
                    style={[{
                        color: Black,
                        fontSize: RFValue(16),
                        padding: 0,
                        flex: 1
                        // writingDirection:I18nManager? 'rtl':'ltr',
                    }]}
                    selection={props.selection}
                    placeholder={props.placeholder}
                    placeholderTextColor={'#979797'}
                    value={props.contact}
                    maxLength={21}
                    onFocus={props.onFocus}
                    autoCapitalize={props.autoCapitalize}
                    editable={props.editable}
                    onChangeText={props.onChangeText}
                    keyboardType={'number-pad'}
                    secureTextEntry={props.secureTextEntry}

                />
                { props.hideIcon ? null:
                <Icon
                    name={'question'}
                    type={'EvilIcons'}
                    style={{ fontSize: RFValue(20), color: _Yellow }}
                />
                }
            </View>
        </View>


    )
}
export default ContactInput;
const styles = StyleSheet.create({
    iconStyle: {
        fontSize: RFValue(20),
        color: 'red',


    },
    inputStyle: {
        backgroundColor: White,
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        //marginTop:5,


    },
    upperView: {
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: _Yellow,
        paddingHorizontal: RFValue(10),
        borderRadius: RFValue(5),
        paddingVertical: Platform.OS === 'ios' ? 10 : 5,
    }


}) 