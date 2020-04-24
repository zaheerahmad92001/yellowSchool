import React ,{Component}from 'react';
import {View,Text,Dimensions}from 'react-native';
import { White } from '../../Colors';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import _HorizontalButton from '../../Component/HorizontalButton';
import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import AccountSetting from '../AccountSetting';
import PasswordSetting from '../PasswordSetting';
import _BottomNavigation from '../../Component/bottomNavigation';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default class MySettings extends Component{
    constructor(props){
        super(props)
        this.state={
            accountClicked:true,
            passwordClicked:false,
            paymentMethodsClicked:false,
            paymentHistoryClicked:false,
            lessonsClicked:false,
            calendarClicked:false,
            notificationClicked:false,

            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: false

        }
    }
    _Accounts=()=>{
        this.setState({
            accountClicked:true,
            passwordClicked:false,
            paymentMethodsClicked:false,
            paymentHistoryClicked:false,
            lessonsClicked:false,
            calendarClicked:false,
            notificationClicked:false
        })
    }
    _Password=()=>{
        this.setState({
            accountClicked:false,
            passwordClicked:true,
            paymentMethodsClicked:false,
            paymentHistoryClicked:false,
            lessonsClicked:false,
            calendarClicked:false,
            notificationClicked:false
        })

    }
    _PaymentMethod=()=>{
        this.setState({
            accountClicked:false,
            passwordClicked:false,
            paymentMethodsClicked:true,
            paymentHistoryClicked:false,
            lessonsClicked:false,
            calendarClicked:false,
            notificationClicked:false
        })
    }
    _PaymentHistory=()=>{
        this.setState({
            accountClicked:false,
            passwordClicked:false,
            paymentMethodsClicked:false,
            paymentHistoryClicked:true,
            lessonsClicked:false,
            calendarClicked:false,
            notificationClicked:false
        })
    }
    _Lessons=()=>{
        this.setState({
            accountClicked:false,
            passwordClicked:false,
            paymentMethodsClicked:false,
            paymentHistoryClicked:false,
            lessonsClicked:true,
            calendarClicked:false,
            notificationClicked:false
        })
    }
    _Calendar=()=>{
        this.setState({
            accountClicked:false,
            passwordClicked:false,
            paymentMethodsClicked:false,
            paymentHistoryClicked:false,
            lessonsClicked:false,
            calendarClicked:true,
            notificationClicked:false
        }) 
    }
    _Notifications=()=>{
        this.setState({
            accountClicked:false,
            passwordClicked:false,
            paymentMethodsClicked:false,
            paymentHistoryClicked:false,
            lessonsClicked:false,
            calendarClicked:false,
            notificationClicked:true
        })   
    }
_Search = () => {

        this.setState({
            changeSearchIconColor: true,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: false
        })
    }
    _MessageClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: true,
            changeUserIconColor: false,
            changeSettingIconColor: false
        })
    }
    _UserClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: true,
            changeSettingIconColor: false
        })
    }
    _SettingClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: true
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <_AppHeader
                leftText={'Done'}
                headerText={'MySETTINGS'}
                />
                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.buttonStyle}
                >
                <_HorizontalButton
                  from={'Mysettings'}
                  firstButtonPress={()=>this._Accounts()}
                  secondButtonPress={()=>this._Password()}
                  thirdButtonPress={()=>this._PaymentMethod()}
                  forthButtonPress={()=>this._PaymentHistory()}
                  fifthButtonPress={()=>this._Lessons()}
                  sixButtonPress={()=>this._Calendar()}
                  seventhButtonPress={()=>this._Notifications()}
                  
                  firstButtonClicked={this.state.accountClicked}
                  secondButtonClicked={this.state.passwordClicked}
                  thirdButtonClicked={this.state.paymentMethodsClicked}
                  forthButtonClicked={this.state.paymentHistoryClicked}
                  fifthButtonClicked={this.state.lessonsClicked}
                  sixButtonClicked={this.state.calendarClicked}
                  seventhButtonClicked={this.state.notificationClicked}

                  firstButtonHeading={'Accounts'}
                  secondButtonHeading={'Password'}
                  thirdButtonHeading={'Payment methods'}
                  forthButtonHeading={'Payment history'}
                  fifthButtonHeading={'Lessons'}
                  sixButtonHeading={'Calendar'}
                  seventhButtonHeading={'Notifications'}
                  
                  />
                </ScrollView>
                <ScrollView showsVerticalScrollIndicator={false} style={{height:screenHeight*0.60,}}>
                <View style={{marginHorizontal:RFValue(15)}}>
                 {this.state.accountClicked ?
                <AccountSetting/>:
                <PasswordSetting/> 
                }
                </View>
                </ScrollView>
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
        )
    }
}
