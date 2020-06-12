import React, { Component } from 'react';
import { View, Text, Dimensions, ActivityIndicator, ToastAndroid } from 'react-native';
import styles from './styles';
import _AppHeader from '../../../Component/AppHeader';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import _TextInput from '../../../Component/Input';
import { Black, _Yellow } from '../../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import _Button from '../../../Component/_Button';
import { ValidateEmail } from '../../../RandomFun';
import DialogBox from 'react-native-dialogbox';
import Auth from '../../../Utils/modal/Auth';
import {connect} from 'react-redux';
import {UserInfo}from '../../../Redux/Actions/User';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export  class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user_name: '',
            token: '',
            profile_pic: '',
            loading:false,
        }
    }
    goBack = () => {
        this.props.navigation.pop()
    }

    // get_Response_Info = (error, result) => {
    //     if (error) {
    //       Alert.alert('Error fetching data: ' + error.toString());
    //     } else {
    //       alert(JSON.stringify(result));
    //       this.setState({ user_name: 'Welcome' + ' ' + result.name });
    //       this.setState({ token: 'User Token: ' + ' ' + result.id });
    //       this.setState({ profile_pic: result.picture.data.url });
    //     }
    //   };
    
    //   onLogout = () => {
    //     //Clear the state after logout
    //     this.setState({ user_name: null, token: null, profile_pic: null });
    //   };

    Login=()=>{
    const {email,password}= this.state;
    const scope = this;
    
    if(email.trim().length >0 && ValidateEmail(email.trim() ) ){
      if(password.trim().length >0 ){
        this.setState({loading:true})
        Auth.login(email,password).then((res)=>{
            if(res.success){
            this.setState({loading:false})
            data={
                token:res.Authorization,
                email:res.user.email,
                name:res.user.name
            }
            this.props.UserData(data)
            ToastAndroid.show('Login Successfully',ToastAndroid.SHORT)
            this.props.navigation.navigate('AllTutorList')
            }else{
                scope.dialogbox.tip({
                    title: "oh no !",
                    content: res.error,
                    style: {fontsize: RFValue(15)}
                })
                this.setState({loading:false}) 
            }
        })
      }else{
     scope.dialogbox.tip({
        title: "oh no !",
        content: 'Please enter correct password',
        style: {fontsize: RFValue(15)}
      })
     
      }
    }else{
        scope.dialogbox.tip({
            title: "oh no !",
           content: 'Please enter valid email',
            style: {fontsize: RFValue(15)}
          })
    }
    }
    
    render() {
        const {loading} = this.state
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <_AppHeader
                    //leftIcon={'menu'}
                    leftText={'Cancel'}
                    headerText={'LOGIN'}
                    leftPress={() => this.goBack()}
                // leftText={'test'}
                />
                <View style={styles.content}>
                    <Text style={styles.Heading}>Email</Text>
                    <View style={styles.textInputView}>
                        <_TextInput
                            placeholder={'Enter email address'}
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
                        />:
                        <_Button
                            styles={{ height: screenHeight * 0.06, width: screenWidth * 0.9 }}
                            textButton={'Login'}
                            onPress={()=>this.Login()}/>
                        }
                    </View>
                    <View style={styles.forgetpass}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ForgetPassword')}>
                            <Text style={styles.forgetText}>Forget your password ?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <DialogBox ref={dialogbox => { this.dialogbox = dialogbox }} />
                {/* {
                    console.log('user props zaher',this.props.user)
                } */}
            </View>
        )
    }
}
const mapStateToProps =(state)=>{
return{
    user:state.user.UserInfo
}
}
const mapDispatchToProps =(dispatch)=>{
    return{
        UserData:(data)=>{
            dispatch(UserInfo(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)