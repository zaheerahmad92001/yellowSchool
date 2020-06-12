import React, { Component } from 'react';
import { View, Text, StatusBar, Dimensions, ActivityIndicator, ToastAndroid } from 'react-native';
import _AppHeader from '../../../Component/AppHeader';
import _TextInput from '../../../Component/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './styles';
import _Button from '../../../Component/_Button';
import Auth from '../../../Utils/modal/Auth';
import { ValidateEmail } from '../../../RandomFun';
import DialogBox from 'react-native-dialogbox';
import { lightYellow, _Yellow } from '../../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            loading: false
        }
    }
    _Done = () => {
        this.props.navigation.pop()
    }

    Register = () => {
        const scope = this;
        
        const { email, password, name } = this.state;
        if (email.trim().length > 0 && ValidateEmail(email.trim())) {
            if (password.trim().length > 0) {
                if (name.trim().length >= 5) {
                    this.setState({ loading: true })
                    Auth.register(email, password, name)
                        .then((res) => {
                            if (res.success === false) {
                                console.log('success',res.success)
                                scope.setState({loading:false})
                                scope.dialogbox.tip({
                                    title: 'oh no !',
                                    content: res.error
                                })
                            } else {
                                scope.setState({loading:false})
                                ToastAndroid.show('User register successfully', ToastAndroid.SHORT)
                            }

                        }).catch((error) => {
                            scope.dialogbox.tip({
                                title: 'oh no !',
                                content: 'network error'
                            })
                            console.log('fail', error)
                        })
                } else {
                    scope.dialogbox.tip({
                        title: "oh no !",
                        content: 'Please enter name',
                        style: {
                            fontsize: RFValue(15)
                        }
                    })
                }
            } else {
                scope.dialogbox.tip({
                    title: "oh no !",
                    content: 'Please enter password',
                    style: {
                        fontsize: RFValue(15)
                    }
                })
            }
        } else {
            scope.dialogbox.tip({
                title: "oh no !",
                content: 'Please enter valid email',
                style: {
                    fontsize: RFValue(15)
                }
            })
        }


    }

    render() {
        const { loading } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <_AppHeader
                    leftText={'Done'}
                    headerText={'SIGN UP'}
                    leftPress={() => this._Done()}
                />
                <View style={styles.content}>
                    <Text style={styles.Heading}>Name</Text>
                    <View style={styles.textInputView}>
                        <_TextInput
                            placeholder={'Your name'}
                            onChangeText={(value) => this.setState({ name: value })}
                            value={this.state.name}
                        />
                    </View>
                    <Text style={[styles.Heading, { marginTop: RFValue(25) }]}>Email</Text>
                    <View style={styles.textInputView}>
                        <_TextInput
                            placeholder={'Enter email'}
                            onChangeText={(value) => this.setState({ email: value })}
                            value={this.state.email}
                        />
                    </View>
                    <Text style={[styles.Heading, { marginTop: RFValue(25) }]}>Password</Text>
                    <View style={styles.textInputView}>
                        <_TextInput
                            placeholder={'Enter password'}
                            onChangeText={(value) => this.setState({ password: value })}
                            value={this.state.password}
                        />
                    </View>

                    <View style={styles.ButtonView}>
                        {loading ?
                            <ActivityIndicator
                                color={_Yellow}
                                size='large'
                            /> :

                            <_Button
                                styles={{ height: screenHeight * 0.06, width: screenWidth * 0.9 }}
                                textButton={'Sign Up'}
                                onPress={() => this.Register()} />
                        }
                    </View>
                </View>
                <DialogBox ref={dialogbox => { this.dialogbox = dialogbox }} />
            </View>
        )
    }
}