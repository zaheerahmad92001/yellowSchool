import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    Button
} from 'react-native';
import {
    LoginButton,
    AccessToken,
    GraphRequest,
    GraphRequestManager,
} from 'react-native-fbsdk';
import { LoginManager } from 'react-native-fbsdk';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';


import styles from './styles'
import _AppHeader from '../../Component/AppHeader';
import { White, Black, _Yellow, lightGrey } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Icon } from 'native-base';
import _Button from '../../Component/_Button';
import { Modalize } from 'react-native-modalize';
import _BottomSheet from '../../Component/_bottomSheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _BottomNavigation from '../../Component/bottomNavigation';
import { translate } from '../../Component/i18n';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
import firebase from '@react-native-firebase/app';

export default class Account extends Component {
    loginSheet = React.createRef();
    signUpSheet = React.createRef();
    constructor(props) {
        super(props)
        this.state = {
            showBottomSheet: false,
            showSignUpSheet: false,
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: false,

            userInfo: null,
      gettingLoginStatus: true,
        }
    }

    _navigateTo = (routeName) => {
        this.onCloseLoginSheet();
        this.onCloseSignUpSheet();
        this.props.navigation.navigate(routeName)
    }
    onCloseLoginSheet = () => {
        this.setState({ showBottomSheet: false })
        if (this.loginSheet.current) {
            this.loginSheet.current.close();
        }
    }
    onCloseSignUpSheet = () => {
        this.setState({ showSignUpSheet: false })
        if (this.signUpSheet.current) {
            this.signUpSheet.current.close();
        }
    }
    callLoginSheet = () => {
        const loginSheet = this.loginSheet.current;
        if (loginSheet) {
            this.setState({ showBottomSheet: true })
            loginSheet.open()
        }
    }
    callSignUpSheet = () => {
        const signUpSheet = this.signUpSheet.current;
        if (signUpSheet) {
            this.setState({ showSignUpSheet: true })
            signUpSheet.open()
        }
    }
    changeSheet = (sheet) => {
        if (sheet === 'signUp') {
            const signUpSheet = this.signUpSheet.current;
            this.setState({ showBottomSheet: false })
            if (this.loginSheet.current) {
                this.loginSheet.current.close()
                if (signUpSheet) {
                    this.setState({ showSignUpSheet: true })
                    signUpSheet.open()
                }
            }
        }
        if (sheet === 'login') {
            const loginSheet = this.loginSheet.current;
            this.setState({ showSignUpSheet: false })
            if (this.signUpSheet.current) {
                this.signUpSheet.current.close()
                if (loginSheet) {
                    this.setState({ showBottomSheet: true })
                    loginSheet.open()
                }
            }
        }

    }
// google signIn

    // componentDidMount() {
    //     //initial configuration
    //     GoogleSignin.configure({
    //       //It is mandatory to call this method before attempting to call signIn()
    //       scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    //       // Repleace with your webClientId generated from Firebase console
    //       webClientId: '1082030082725-g6cd8b5eiojs24f9j4uterq6ab3kjvvb.apps.googleusercontent.com',
    //     });
    //     //Check if user is already signed in
    //     this._isSignedIn();
    //   }
    
    //   _isSignedIn = async () => {
    //     const isSignedIn = await GoogleSignin.isSignedIn();
    //     if (isSignedIn) {
    //       alert('User is already signed in');
    //       //Get the User details as user is already signed in
    //       this._getCurrentUserInfo();
    //     } else {
    //       //alert("Please Login");
    //       console.log('Please Login');
    //     }
    //     this.setState({ gettingLoginStatus: false });
    //   };
    
    //   _getCurrentUserInfo = async () => {
    //     try {
    //       const userInfo = await GoogleSignin.signInSilently();
    //       console.log('User Info --> ', userInfo);
    //       this.setState({ userInfo: userInfo });
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_REQUIRED) {
    //         alert('User has not signed in yet');
    //         console.log('User has not signed in yet');
    //       } else {
    //         alert("Something went wrong. Unable to get user's info");
    //         console.log("Something went wrong. Unable to get user's info");
    //       }
    //     }
    //   };
    
    //   _signIn = async () => {
    //     //Prompts a modal to let the user sign in into your application.
    //     try {
    //       await GoogleSignin.hasPlayServices({
    //         //Check if device has Google Play Services installed.
    //         //Always resolves to true on iOS.
    //         showPlayServicesUpdateDialog: true,
    //       });
    //       const userInfo = await GoogleSignin.signIn();
    //       console.log('User Info --> ', userInfo);
    //       this.setState({ userInfo: userInfo });
    //     } catch (error) {
    //       console.log('Message', error.message);
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         console.log('User Cancelled the Login Flow');
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         console.log('Signing In');
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         console.log('Play Services Not Available or Outdated');
    //       } else {
    //         console.log('Some Other Error Happened');
    //       }
    //     }
    //   };
    
    //   _signOut = async () => {
    //     //Remove user session from the device.
    //     try {
    //       await GoogleSignin.revokeAccess();
    //       await GoogleSignin.signOut();
    //       this.setState({ userInfo: null }); // Remove the user from your app's state as well
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    // Firebase 

    // handleFacebookLogin () {
    //     LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends']).then(
    //       function (result) {
    //         if (result.isCancelled) {
    //           console.log('Login cancelled')
    //         } else {
    //             console.log('mein hn na ah', result.grantedPermissions.email)
    //           //console.log('Login success with permissions: ' + result.grantedPermissions.toString())
    //         }
    //       },
    //       function (error) {
    //         console.log('Login fail with error: ' + error)
    //       }
    //     )
    //   }

    renderBottomSheet = () => {
        return (
            <_BottomSheet
                //    logInWithFB={()=>this._navigateTo('Login')}
                //    logInWithGmail={()=>this._navigateTo('Login')}
                logInWithEmail={() => this._navigateTo('Login')}
                changeSheet={() => this.changeSheet('signUp')}
                firstIconName={'facebook-official'}
                firstIconType={'FontAwesome'}
                firstButtonHeading={'Log in facebook'}
                secondIconName={'logo-google'}
                secondIconType={'Ionicons'}
                secondButtonHeading={'Log in with gmail'}
                thirdIconName={'email'}
                thirdIconType={'Entypo'}
                thirdButtonHeading={'Log in with email'}
                forthButtonHeading={'Sign up'}
                Heading={'Good to see you again!'}
                subHeading={'Access your lesson schedule, send messages and book lessons'}
            />
        )
    }
    renderSignUpSheet = () => {
        return (
            <_BottomSheet
                sigUp={true}
                logInWithFB={() => this._navigateTo('SignUp')}
                logInWithGmail={() => this._navigateTo('SignUp')}
                logInWithEmail={() => this._navigateTo('SignUp')}
                changeSheet={() => this.changeSheet('login')}
                firstIconName={'facebook-official'}
                firstIconType={'FontAwesome'}
                firstButtonHeading={'Sign up with facebook'}
                secondIconName={'logo-google'}
                secondIconType={'Ionicons'}
                secondButtonHeading={'Sign up with gmail'}
                thirdIconName={'email'}
                thirdIconType={'Entypo'}
                thirdButtonHeading={'Sign up with email'}
                forthButtonHeading={'Login'}
                Heading={'Sign up to start learning'}
                subHeading={'create an account to message tutors and book lessons'}
            />
        )
    }
    _Search = () => {
        this.setState({
            changeSearchIconColor: true,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: false
        })
        this.props.navigation.navigate('LessonIntroView')
    }
    _MessageClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: true,
            changeUserIconColor: false,
            changeSettingIconColor: false
        })
        this.props.navigation.navigate('MessageIntroView')
    }
    _UserClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: true,
            changeSettingIconColor: false
        })
        this.props.navigation.navigate('MyTutorList')
    }
    _SettingClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: true
        })
        this.props.navigation.navigate('MySettings')
    }
    _onPress = () => {
        this.props.navigation.navigate('AppLanguage')
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <_AppHeader
                    styles={{ backgroundColor: White, }}
                    leftTextStyle={{ color: Black, fontSize: RFValue(16), }}
                    leftText={translate('constants.account')}
                    leftPress={() => this.goBack()}
                />
                <View style={styles.content}>
                    <View style={{ flexDirection: 'row' }}>
                        <_Button
                            onPress={() => this.callLoginSheet()}
                            styles={{ width: screenWidth * 0.35, }}
                            textStyle={{ fontSize: RFValue(12), color: Black }}
                            IconNmae={'login'}
                            textButton={translate('constants.login')}
                        />
                        <_Button
                            onPress={() => this.callSignUpSheet()}
                            styles={{ width: screenWidth * 0.35, }}
                            textStyle={{ fontSize: RFValue(12), color: Black }}
                            IconNmae={'account'}
                            textButton={translate('constants.signUp')}
                        />
                    </View>
                    <View style={styles.contentSecond}>
                        <TouchableOpacity style={styles.settingStyle}>
                            <Text style={styles.Heading}>{translate('constants.supportCenter')}</Text>
                            <Icon
                                name={'questioncircleo'}
                                type={'AntDesign'}
                                style={{ fontSize: RFValue(14), color: _Yellow }}
                            />
                        </TouchableOpacity>
                        <View style={styles.bottomBorder}></View>
                        <TouchableOpacity style={styles.settingStyle}>
                            <Text style={styles.Heading}>{translate('constants.reportProblem')}</Text>
                            <Icon
                                name={'exclamation'}
                                type={'EvilIcons'}
                                style={{ fontSize: RFValue(20), color: _Yellow }}
                            />
                        </TouchableOpacity>
                        <View style={styles.bottomBorder}></View>
                        <TouchableOpacity style={styles.settingStyle}>
                            <Text style={styles.Heading}>{translate('constants.privacyPolicy')}</Text>
                            <Icon
                                name={'lock'}
                                type={'EvilIcons'}
                                style={{ fontSize: RFValue(23), color: _Yellow }}
                            />
                        </TouchableOpacity>
                        <View style={styles.bottomBorder}></View>

                        <TouchableOpacity style={styles.settingStyle}>
                            <Text style={styles.Heading}>{translate('constants.termsPolicy')}</Text>
                            <Icon
                                name={'file1'}
                                type={'AntDesign'}
                                style={{ fontSize: RFValue(15), color: _Yellow }}
                            />
                        </TouchableOpacity>
                        <View style={[styles.bottomBorder]}></View>
                        <TouchableOpacity style={styles.settingStyle}
                            onPress={this._onPress}
                        >
                            <Text style={styles.Heading}>{translate('constants.languages')}</Text>
                            <Icon
                                name={'language'}
                                type={'MaterialIcons'}
                                style={{ fontSize: RFValue(15), color: _Yellow }}
                            />
                        </TouchableOpacity>
                        <View style={[styles.bottomBorder]}></View>
                        <Text style={styles.versionText}>{translate('constants.version')}</Text>
                    </View>
                 {/* <GoogleSigninButton
              style={{ width: 312, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={this._signIn}
            /> */}
                </View>

                <View style={{ flex: 1.15 }}>
                    <_BottomNavigation
                        SearchClick={() => this._Search()}
                        changeSearchIconColor={this.state.changeSearchIconColor}
                        MessageClick={() => this._MessageClick()}
                        changeMessageIconColor={this.state.changeMessageIconColor}
                        UserClick={() => this._UserClick()}
                        changeUserIconColor={this.state.changeUserIconColor}
                        SettingClick={() => this._SettingClick()}
                        changeSettingIconColor={this.state.changeSettingIconColor}
                    />
                </View>

                <Modalize
                    adjustToContentHeight
                    ref={this.loginSheet}
                    onClosed={this.onClosed}>
                    {this.renderBottomSheet()}
                </Modalize>
                <Modalize
                    adjustToContentHeight
                    ref={this.signUpSheet}
                    onClosed={this.onClosed}>
                    {this.renderSignUpSheet()}
                </Modalize>
            </SafeAreaView>
        )
    }
}