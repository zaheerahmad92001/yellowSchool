import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    SectionList
} from 'react-native';
import styles from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';
import { lightGrey, Red, Black, _Yellow } from '../../Colors';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import _Button from '../../Component/_Button';
import _Notifications from '../../Component/notification';
var A = [
    {Id:1, 'value': 'Lesson schedule', 'notification': 'Alert about new lessons and schedule change', },
    {Id:2, 'value': 'General reminder', 'notification': 'Alert about new lessons and schedule change' },
    {Id:3, 'value': 'Updates tips and offers', 'notification': 'Alert about new lessons and schedule change' }
];
var B = [
    { Id:4, 'value': 'Lesson and messages', 'notification': 'Alert about new lessons and schedule change' },
    { Id:5, 'value': 'General reminder', 'notification': 'Alert about new lessons and schedule change' },
    { Id:6, 'value': 'General reminder', 'notification': 'Alert about new lessons and schedule change' },
    { Id:7, 'value': 'Updates tips and offers', 'notification': 'Alert about new lessons and schedule change' },
    { Id:8, 'value': 'General reminder', 'notification': 'Alert about new lessons and schedule change' },
    { Id:9, 'value': 'Updates tips and offers', 'notification': 'Alert about new lessons and schedule change' },
    { Id:10, 'value': 'Updates tips and offers', 'notification': 'Alert about new lessons and schedule change' },
];
var C = [
    { Id:11, 'value': 'Updates tips and offers', 'notification': 'Alert about new lessons and schedule change' },
    { Id:12, 'value': 'Updates tips and offers', 'notification': 'Alert about new lessons and schedule change' },
    { Id:13, 'value': 'Updates tips and offers', 'notification': 'Alert about new lessons and schedule change' },
    { Id:14, 'value': 'Updates tips and offers', 'notification': 'Alert about new lessons and schedule change' }
];

export default class NotificationSetting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedNotifiation:{}
        }
    }
    renderNotifications = (item, index) => {
        return (
            <_Notifications
                item={item}
                index={index}
                onSelect={() => this.onSelect(item)}
                checked={this.state.selectedNotifiation[item.Id]}
            />
        )
    }
    _saveChanages=()=>{

    }
    _unsubscribe=()=>{
       this.props.navigation.navigate('UnsubscribeView')
    }

    onSelect = (item) => {
        console.log('console ',item)
        let selectedItems = JSON.parse(JSON.stringify(this.state.selectedNotifiation))
        if (selectedItems[item.Id]) {
            selectedItems[item.Id] =false
        this.setState({ selectedNotifiation: selectedItems })
        } else {

            selectedItems[item.Id] = true;
            this.setState({ selectedNotifiation: selectedItems })
        }
    }

    render() {
        console.log('notification',this.state.selectedNotifiation)
        return (
            <ScrollView>
                <Text style={styles.notificationText}>Notifications center</Text>
                <View style={styles.bottomBorder}></View>

                <View style={{ marginTop: RFValue(10) }}>
                    <SectionList
                        ItemSeparatorComponent={() => <View style={{ height: 0, width: '100%', backgroundColor: '#C8C8C8' }} />}
                        keyExtractor={(item, index) => index}
                        SectionSeparatorComponent={() => <View style={{ height: 0, width: '100%', backgroundColor: '#C8C8C8' }} />}
                        sections={[
                            { title: 'Email notifications', data: A },
                            { title: 'SMS notifications', data: B },
                            { title: 'Preply insights', data: C },
                        ]}
                        renderSectionHeader={({ section }) => (
                            <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
                        )}
                        renderItem={({ item, index }) => this.renderNotifications(item, index)}
                    />
                </View>
                <View style={styles.ButtonView}>
                <_Button
                textButton={'Save changes'}
                onPress={()=>this._saveChanages()}
                />
                </View>
          <View style={styles.UnsubButtonView}>
                <_Button
                textButton={'Unsubscribe from all'}
                styles={styles.UnsubscribeButton}
                textStyle={{color:Red}}
                onPress={()=>this._unsubscribe()}
                />
                </View>
            </ScrollView>
        )
    }
}