import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    ActivityIndicator
} from 'react-native';
import styles from './styles';
import { Thumbnail, Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import _Button from '../../Component/_Button';
import { _Yellow, White, Black, lightGrey, Red } from '../../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import _TextInput from '../../Component/Input';
import ContactInput from '../../Component/ContactInput';
import RNPickerSelect from 'react-native-picker-select';
import TimeZone from 'react-native-timezone';
import { skype } from '../../Constants';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
import AccountDetail from '../../Utils/modal/AccountDetail';
import { connect } from 'react-redux';
import { ValidateEmail } from '../../RandomFun';
import DialogBox from 'react-native-dialogbox';
import AsyncStorage from '@react-native-community/async-storage';
//import store from '../../Redux/Store';

const placeholder = {
    label: 'select timeZone',
    value: null,
    color: Black,
    placeholderTextColor: Black,
    fontSize: RFValue(14)
}
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

let socialNetworks = [
    'www.facebook.com',
    'www.googl.com'
]
export class AccountSetting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarSource: '',
            firstName: "",
            lastName: "",
            email: '',
            skypeId: '',
            hideIcon: false,
            _timeZone: 'None',
            contact: '',
            cca2: "PK",
            callingCode: '92',
            token: this.props.user.token,
            logOut:false,
            loading: false,
        }
        this.inputRefs = {
            skypeRef: null
        }


    }

   async componentDidMount() {
        const item = await AsyncStorage.getItem('loginUser')
        if(item){
            this.setState({
                logOut:false
            })
        }else{
            this.setState({
                logOut:true
            })
        }

        // AsyncStorage.getItem('loginUser').then((value)=>{
        //     console.log('asyncstorage',JSON.parse(value))
        // })
        // this.getTimeZone()
    }
    Edit = () => {

    }
    _connect = () => {

    }
    _Disconnect = () => {

    }
    _deleteAccount = () => {

    }
    _saveSetting = () => {
        const scope = this;
        const { cca2, email, firstName, lastName, skypeId, callingCode, contact, _timeZone, avatarSource, token ,logOut} = this.state;
        if (token) {
            if(!logOut){
            if (email.trim().length > 0 && ValidateEmail(email.trim())) {
                this.setState({ loading: true })
                AccountDetail.account(email, firstName, lastName, contact, skypeId, _timeZone, avatarSource, socialNetworks).then((res) => {
                    if (res.success) {
                        this.setState({
                            loading: false,
                            email: '',
                            firstName: '',
                            lastName: '',
                            skypeId: '',
                            _timeZone: 'None',
                            contact: '',
                            avatarSource: ''
                        })
                        // console.log('success', res)
                        // alert('success')
                    } else {
                        scope.props.dialogbox().tip({
                            title: "oh no !",
                            content: res.error,
                            style: { fontsize: RFValue(15) }
                        })
                    }
                }).catch((error) => {
                    scope.props.dialogbox().tip({
                        title: "oh no !",
                        content: 'network request fail',
                        style: { fontsize: RFValue(15) }
                    })
                })
            } else {
                scope.props.dialogbox().tip({
                    title: "oh no !",
                    content: 'enter valid email',
                    style: { fontsize: RFValue(15) }
                })
            }
        }else{
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
    getTimeZone = async () => {
        const timeZone = await TimeZone.getTimeZone().then(zone => zone);
        console.log({ timeZone });
    }
    upLoadImg = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
    render() {

        const { cca2, email, firstName, lastName, skypeId, callingCode, contact, token, loading } = this.state;
        //console.log('user information is here', token)
        return (
            <View style={styles.container}>
                <Text style={styles.accountText}>Account Setting</Text>
                <View style={styles.bottomBorder}></View>
                <View style={styles.profileView}>
                    <View style={styles.ImageView}>
                        <Text style={styles.profilePhoto}>Profile phote</Text>
                        {this.state.avatarSource ?
                            <Image
                                style={{ width: RFValue(140), height: RFValue(140), marginTop: RFValue(5) }}
                                source={this.state.avatarSource}
                            /> :
                            <Image
                                style={{ width: RFValue(140), height: RFValue(140), marginTop: RFValue(5) }}
                                source={require('../../Assets/download.jpeg')}
                            />}
                        <View style={styles.EditView}>
                            <TouchableOpacity
                                onPress={() => this.upLoadImg()}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        name={'edit'}
                                        type={'AntDesign'}
                                        style={{ fontSize: RFValue(16), color: White }}
                                    />
                                    <Text style={styles.editText}>Edit</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.ButtonView}>
                        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: RFValue(7) }}>
                            <_Button
                                onPress={() => this.upLoadImg()}
                                styles={styles.uploadButtonView}
                                textStyle={{ color: _Yellow }}
                                textButton={'Upload image'}
                            />
                        </View>

                        <View>
                            <Text style={styles.fileSize}
                            >Maximum size-2MB</Text>
                            <Text style={styles.fileType}>JPG or PNG</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.Heading}>First name</Text>
                    <_TextInput
                        inputBox={styles.inputStyle}
                        placeholder={'Mudassir'}
                        placeholderTextColor={_Yellow}
                        squarInput={true}
                        onChangeText={(value) => this.setState({ firstName: value })}
                    />
                    <Text style={styles.Heading}>Last name</Text>
                    <_TextInput
                        inputBox={styles.inputStyle}
                        placeholder={'Ashiq'}
                        placeholderTextColor={_Yellow}
                        squarInput={true}
                        onChangeText={(value) => this.setState({ lastName: value })}
                    />
                    <Text style={styles.Heading}>Email</Text>
                    <_TextInput
                        inputBox={styles.inputStyle}
                        placeholder={'MudassarAshiq@gmail.com'}
                        placeholderTextColor={_Yellow}
                        squarInput={true}
                        onChangeText={(value) => this.setState({ email: value })}
                    />
                    <Text style={styles.Heading}>Phone number</Text>
                    <View style={{ padding: 0, }}>
                        <ContactInput
                            cca2={cca2}
                            callingCode={callingCode}
                            hideIcon={this.state.hideIcon}
                            onChangeText={(value) => this.setState({ contact: value, hideIcon: true })}
                            contact={contact}
                            select={(country) => {
                                this.setState({ cca2: country.cca2, callingCode: country.callingCode })
                            }}
                        />
                    </View>
                    <View style={{ marginTop: RFValue(20) }}>
                        <Text style={styles.Heading}>Skype id</Text>
                        <_TextInput
                            inputBox={styles.inputStyle}
                            placeholder={'MudassarAshiq@gmail.com'}
                            placeholderTextColor={_Yellow}
                            squarInput={true}
                            onChangeText={(value) => this.setState({ skypeId: value })}
                        />
                        <Text style={styles.Heading}>Skype id</Text>
                        <View style={[styles.RNPickerView, { paddingVertical: Platform.OS === 'ios' ? 8 : 1, }]}>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                placeholder={placeholder}
                                style={{
                                    inputAndroid: {
                                        fontSize: RFValue(16),
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        color: _Yellow
                                    },
                                    inputIOS: {
                                        fontSize: RFValue(16),
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 10,
                                        placeholderTextColor: _Yellow,
                                        color: _Yellow,
                                    },
                                }}
                                onValueChange={(value) => this.setState({
                                    _timeZone: value,

                                })}
                                items={skype}
                                value={this.state._timeZone}
                                Icon={() => {
                                    return <Icon
                                        style={{
                                            position: 'absolute', top: Platform.OS === 'ios' ? 5 : 10, right: 10
                                        }}
                                        name="md-arrow-dropdown" type={'Ionicons'} />;
                                }}
                                InputAccessoryView={this.InputAccessoryView}
                                ref={ref => {
                                    this.inputRefs.industry = ref;
                                }}
                            />
                        </View>





                        <View style={styles.SocialBox}>
                            <Text style={styles.socialText}>Social networks</Text>
                            <TouchableOpacity style={styles.notConnected}>
                                <Icon
                                    name={'facebook-box'}
                                    type={'MaterialCommunityIcons'}
                                    style={{ fontSize: RFValue(20), color: lightGrey, marginTop: RFValue(10) }}
                                />
                                <Text style={styles.notConnectedText}>Not conneted to facebook account</Text>
                            </TouchableOpacity>
                            <View style={styles.connectText}>
                                <TouchableOpacity
                                    onPress={() => this._connect()}
                                >
                                    <Text style={styles.connect}>Connect</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={[styles.notConnected, { marginTop: 0 }]}>
                                <Icon
                                    name={'logo-google'}
                                    type={'Ionicons'}
                                    style={{ fontSize: RFValue(20), color: lightGrey, marginTop: RFValue(10) }}
                                />
                                <Text style={styles.notConnectedText}>connect as</Text>
                                <Text style={styles.notConnectedText}>MudassarAshiq</Text>
                            </TouchableOpacity>
                            <View style={styles.connectText}>
                                <TouchableOpacity
                                    onPress={() => this._Disconnect()}
                                >
                                    <Text style={styles.connect}>Disconnect</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.ButtonBox}>
                            {loading ?
                                <ActivityIndicator
                                    color={_Yellow}
                                    size={'large'}
                                />
                                :
                                <_Button
                                    styles={styles.saveSetting}
                                    textStyle={styles.testStyle}
                                    textButton={'Save settings'}
                                    onPress={() => this._saveSetting()}
                                />
                            }
                        </View>
                        <View style={[styles.ButtonBox, { marginBottom: RFValue(30) }]}>
                            <_Button
                                styles={[styles.saveSetting, { borderColor: Red }]}
                                textStyle={[styles.testStyle, { color: Red }]}
                                textButton={'Delete account'}
                                onPress={() => this._deleteAccount()}
                            />
                        </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting)