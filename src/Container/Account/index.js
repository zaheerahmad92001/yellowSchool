import React,{Component}from 'react';
import{
    View,
    Text,
    Dimensions,
}from 'react-native';
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
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class Account extends Component{
    loginSheet = React.createRef();
    signUpSheet = React.createRef();
    constructor(props){
        super(props)
        this.state={
            showBottomSheet:false,
            showSignUpSheet:false,
            changeSearchIconColor:false,
            changeMessageIconColor:false,
            changeUserIconColor:false,
            changeSettingIconColor:false

        }
    }
    _navigateTo=(routeName)=>{
    this.props.navigation.navigate(routeName)
    }
    callLoginSheet=()=>{
        const loginSheet = this.loginSheet.current;
        if(loginSheet){
            this.setState({showBottomSheet:true})
            loginSheet.open()
        }
    }
    callSignUpSheet=()=>{
        const signUpSheet = this.signUpSheet.current;
        if(signUpSheet){
            this.setState({showSignUpSheet:true})
            signUpSheet.open()
        }
    }
    changeSheet=(sheet)=>{
        if(sheet==='signUp'){
        const signUpSheet = this.signUpSheet.current;
        this.setState({showBottomSheet:false})
        if(this.loginSheet.current){
            this.loginSheet.current.close()
            if(signUpSheet){
                this.setState({showSignUpSheet:true})
                signUpSheet.open()
            }
        }
    }
    if(sheet==='login'){
        const loginSheet = this.loginSheet.current;
        this.setState({showSignUpSheet:false})
        if(this.signUpSheet.current){
            this.signUpSheet.current.close()
            if(loginSheet){
                this.setState({showBottomSheet:true})
                loginSheet.open()
            }
        }
    }
   
    }
    // callLoginSheet=()=>{
    //     const loginSheet = this.loginSheet.current;
    //     this.setState({showSignUpSheet:false})
    //     if(this.signUpSheet.current){
    //         this.signUpSheet.current.close()
    //         if(loginSheet){
    //             this.setState({showBottomSheet:true})
    //             loginSheet.open()
    //         }
    //     }
    // }
    renderBottomSheet=()=>{
        return(
           <_BottomSheet
           logInWithFB={()=>this._navigateTo('Login')}
           logInWithGmail={()=>this._navigateTo('Login')}
           logInWithEmail={()=>this._navigateTo('Login')}
           changeSheet={()=>this.changeSheet('signUp')}
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
    renderSignUpSheet=()=>{
        return(
            <_BottomSheet
            sigUp={true}
            logInWithFB={()=>this._navigateTo('SignUp')}
            logInWithGmail={()=>this._navigateTo('SignUp')}
            logInWithEmail={()=>this._navigateTo('SignUp')}
            changeSheet={()=>this.changeSheet('login')}
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
    _Search=()=>{
        
        this.setState({
           changeSearchIconColor:true,
           changeMessageIconColor:false,
           changeUserIconColor:false,
           changeSettingIconColor:false
        })
    }
    _MessageClick=()=>{
        this.setState({
            changeSearchIconColor:false,
            changeMessageIconColor:true,
            changeUserIconColor:false,
            changeSettingIconColor:false
         })
    }
    _UserClick=()=>{
        this.setState({
            changeSearchIconColor:false,
            changeMessageIconColor:false,
            changeUserIconColor:true,
            changeSettingIconColor:false
         })
    }
    _SettingClick=()=>{
        this.setState({
            changeSearchIconColor:false,
            changeMessageIconColor:false,
            changeUserIconColor:false,
            changeSettingIconColor:true
         })
    }
    render(){
        return(
            <Container style={styles.container}>
                <_AppHeader
                styles={{backgroundColor:White,}}
                leftTextStyle={{color:Black, fontSize:RFValue(16),}}
                leftText={'Account'}
                />
               <View style={styles.content}>
                <View style={{flexDirection:'row'}}>
                <_Button
                onPress={()=>this.callLoginSheet()}
                styles={{width: screenWidth*0.35,}}
                textStyle={{fontSize:RFValue(12),color:Black}}
                IconNmae={'login'}
                textButton={'Login'}
                />
                <_Button
                 onPress={()=>this.callSignUpSheet()}
                styles={{width: screenWidth*0.35,}}
                textStyle={{fontSize:RFValue(12),color:Black}}
                IconNmae={'account'}
                textButton={'SignUp'}
                />
                </View>
                <View style={styles.contentSecond}>
                 <View style={styles.settingStyle}>
                  <Text style={styles.Heading}>Support center</Text>
                  <Icon
                  name={'questioncircleo'}
                  type={'AntDesign'}
                  style={{fontSize:RFValue(14),color:_Yellow}}
                  />
                 </View>
                 <View style={styles.bottomBorder}></View> 
                 <View style={styles.settingStyle}>
                  <Text style={styles.Heading}>Report problem</Text>
                  <Icon
                  name={'exclamation'}
                  type={'EvilIcons'}
                  style={{fontSize:RFValue(20),color:_Yellow}}
                  />
                 </View>
                 <View style={styles.bottomBorder}></View> 
                 <View style={styles.settingStyle}>
                  <Text style={styles.Heading}>Privacy policy</Text>
                  <Icon
                  name={'lock'}
                  type={'EvilIcons'}
                  style={{fontSize:RFValue(23),color:_Yellow}}
                  />
                 </View>
                 <View style={styles.bottomBorder}></View> 

                 <View style={styles.settingStyle}>
                  <Text style={styles.Heading}>Terms of service</Text>
                  <Icon
                  name={'file1'}
                  type={'AntDesign'}
                  style={{fontSize:RFValue(15),color:_Yellow}}
                  />
                 </View>
                 <View style={[styles.bottomBorder]}></View> 
                  <Text style={styles.versionText}>Version 13.9</Text>
                </View>
                <_BottomNavigation
                SearchClick={()=>this._Search()}
                changeSearchIconColor={this.state.changeSearchIconColor}
                MessageClick={()=>this._MessageClick()}
                changeMessageIconColor={this.state.changeMessageIconColor}
                UserClick={()=>this._UserClick()}
                changeUserIconColor={this.state.changeUserIconColor}
                SettingClick={()=>this._SettingClick()}
                changeSettingIconColor={this.state.changeSettingIconColor}
                />
                {/* <View style={styles.BottomNavigation}>
                   <View style={{flex:1.5, flexDirection:'row',justifyContent:'space-evenly',alignItems:"center"}}>
                       <Icon
                       name={'ios-search'}
                       type={'Ionicons'}
                       style={{fontSize:RFValue(22),color:'white'}}
                       />
                       <Icon/>
                       <Icon
                       name={'message-circle'}
                       type={'Feather'}
                       style={{fontSize:RFValue(22),color:'white'}}
                       />
                       <Icon/>
                       <Icon
                       name={'user'}
                       type={'Feather'}
                       style={{fontSize:RFValue(22),color:'white'}}
                       />
                       <Icon/>
                       <Icon
                       name={'settings'}
                       type={'Feather'}
                       style={{fontSize:RFValue(20),color:'white'}}
                       />
                       <Icon/>
                       </View>
                   
                </View> */}
               </View>
               <Modalize
               adjustToContentHeight
               ref={this.loginSheet}
               onClosed = {this.onClosed}>
                {this.renderBottomSheet()}   
                </Modalize>
                <Modalize
               adjustToContentHeight
               ref={this.signUpSheet}
               onClosed = {this.onClosed}>
                {this.renderSignUpSheet()}   
                </Modalize>
            </Container>
        )
    }
}