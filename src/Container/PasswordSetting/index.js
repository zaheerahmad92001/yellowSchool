import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    ActivityIndicator,
    ToastAndroid,
} from 'react-native';
import styles from './styles';
import _TextInput from '../../Component/Input';
import _Button from '../../Component/_Button';
import { _Yellow } from '../../Colors';
import { connect } from 'react-redux';
import { ValidateEmail } from '../../RandomFun';
import DialogBox from 'react-native-dialogbox';
import AsyncStorage from '@react-native-community/async-storage';
import { RFValue } from 'react-native-responsive-fontsize';
import AccountDetail from '../../Utils/modal/AccountDetail';

export class PasswordSetting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPassword:'',
            verifyPassword:'',
            token: this.props.user.token,
            logOut:false,
            loading:false,
        }
    }
    async componentDidMount() {
        const item = await AsyncStorage.getItem('loginUser')
        if (item) {
            this.setState({
                logOut: false
            })
        } else {
            this.setState({
                logOut: true
            })
        }
    }

    _saveSetting = () => {
        const scope = this;
        const { newPassword, verifyPassword, loading, logOut, token } = this.state;
        if (token) {
            if (!logOut) {
                if (newPassword.trim().length > 0) {
                    if (newPassword === verifyPassword) {
                        this.setState({ loading: true })
                        AccountDetail.changePassword(newPassword)
                            .then((res) => {
                                if (res.success) {
                                    scope.setState({ loading: false, newPassword:"", verifyPassword:"" })
                                    ToastAndroid.show('Password change successfully', ToastAndroid.SHORT)
                                } else {
                                    scope.props.dialogbox().tip({
                                        title: 'oh no !',
                                        content: res.error,
                                        style: { fontsize: RFValue(15) }
                                    })
                                    console.log('error', res)
                                }
                            }).catch((error) => {
                                scope.props.dialogbox().title({
                                    title: 'oh no!',
                                    content: 'network request fail',
                                    style: { fontsize: RFValue(15) }

                                })
                                console.log('error', error)
                            })
                    } else {
                        scope.props.dialogbox().tip({
                            title: "oh no !",
                            content: 'Password not match',
                            style: { fontsize: RFValue(15) }
                        })
                    }

                } else {
                    scope.props.dialogbox().tip({
                        title: "oh no !",
                        content: 'enter password',
                        style: { fontsize: RFValue(15) }
                    })
                }

            } else {
                scope.props.dialogbox().confirm({
                    title: "oh no !",
                    content: 'Need to login first',
                    style: { fontsize: RFValue(15) },
                    ok: {
                        text: 'Yes',
                        callback: () => { this.props.navigation.navigate('Account') }
                    },
                    cancel: {
                        text: 'No',
                        callback: () => {

                        }
                    }
                })
            }
        } else {
            scope.props.dialogbox().confirm({
                title: "oh no !",
                content: 'Need to login first',
                style: { fontsize: RFValue(15) },
                ok: {
                    text: 'Yes',
                    callback: () => { this.props.navigation.navigate('Account') }
                },
                cancel: {
                    text: 'No',
                    callback: () => {

                    }
                }
            })
        }
    }
    render() {
        const {loading}= this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.createPassword}>Create password</Text>
                <View style={styles.bottomBorder}></View>
                <View style={styles.content}>
                    <Text style={styles.Heading}>New password</Text>
                    <_TextInput
                        inputBox={styles.inputStyle}
                        placeholder={'New password'}
                        placeholderTextColor={_Yellow}
                        squarInput={true}
                        onChangeText={(value) => this.setState({ newPassword: value })}
                        secureTextEntry={true}
                    />
                    <Text style={styles.Heading}>Verify</Text>
                    <_TextInput
                        inputBox={styles.inputStyle}
                        placeholder={'Verify'}
                        placeholderTextColor={_Yellow}
                        squarInput={true}
                        onChangeText={(value) => this.setState({ verifyPassword: value })}
                        secureTextEntry={true}
                    />
                    <View style={styles.buttonStyle}>
                        {loading ?
                            <ActivityIndicator
                                color={_Yellow}
                                size='large'
                            /> :

                            <_Button
                                styles={[styles.saveSetting]}
                                textButton={'Save settings'}
                                onPress={() => this._saveSetting()}
                            />
                        }
                    </View>
                </View>
                <DialogBox ref={dialogbox => { this.dialogbox = dialogbox }} />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.UserInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // UserData:(data)=>{
        //     dispatch(UserInfo(data))
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PasswordSetting)