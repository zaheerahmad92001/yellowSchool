import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
} from 'react-native';
import styles from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';
import { lightGrey, Red } from '../../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _Button from '../../Component/_Button';
export default class CalendarSetting extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    _ConnectGoogleCalendar=()=>{

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.googleCalendar}>Google Calendar</Text>
                <View style={styles.bottomBorder}></View>
                <View style={{ marginTop: RFValue(15), }}>
                    <View style={styles.circle}></View>
                    <Icon
                        name={"google"}
                        type={'AntDesign'}
                        style={{ fontSize: RFValue(40), color: Red, top: RFValue(15), left: RFValue(15), position: 'absolute' }}
                    />
                </View>

                <View style={styles.instructonsView}>
                    <View style={{width:'70%',marginTop:RFValue(10)}}>
                        <Text style={styles.connectWithGoogle}>Connect your Google Calendar and
                        synchronize all your Preply lessons with your personal schedule
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonStyle}>
                    <_Button
                    styles={[styles.ButtonView]}
                    textButton={'Connect Google Calendar '}
                    onPress={()=>this._ConnectGoogleCalendar()}
                    />
                    </View>
            </View>
        )
    }
}