import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    SafeAreaView,
} from 'react-native';
import styles from './styles';
import { Content, Thumbnail, Icon } from 'native-base';
import { _Yellow } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _BottomNavigation from '../../Component/bottomNavigation';
const {height:screenHeight,width:screenWidth}= Dimensions.get('window');
export default class UserAccount extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    _Search = () => {
        // this.setState({
        //     changeSearchIconColor: true,
        //     changeMessageIconColor: false,
        //     changeUserIconColor: false,
        //     changeSettingIconColor: false,
        // })
        this.props.navigation.navigate('LessonIntroView')
    }
    _MessageClick = () => {
        // this.setState({
        //     changeSearchIconColor: false,
        //     changeMessageIconColor: true,
        //     changeUserIconColor: false,
        //     changeSettingIconColor: false
        // } )
        this.props.navigation.navigate('MessageIntroView')
    }
    _UserClick = () => {
        // this.setState({
        //     changeSearchIconColor: false,
        //     changeMessageIconColor: false,
        //     changeUserIconColor: true,
        //     changeSettingIconColor: false
        // })
        this.props.navigation.navigate('MyTutorList')
    }
    _SettingClick = () => {
        // this.setState({
        //     changeSearchIconColor: false,
        //     changeMessageIconColor: false,
        //     changeUserIconColor: false,
        //     changeSettingIconColor: true
        // })
        this.props.navigation.navigate('MySettings')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={_Yellow} barStyle={'light-content'} />
                <Content style={styles.content} 
                showsVerticalScrollIndicator={false}
                >
                  
                    <View style={styles.circle}>
                        <Text style={styles.NameBox}>J</Text>
                    </View>
                    <View style={{marginTop:RFValue(10)}}>
                        <Text style={styles.nameStyle}>John D.</Text>
                    </View>
                  <TouchableOpacity style={styles.settingView}>
                      <Text style={styles.rightSideText}>Currency</Text>
                      <Text style={styles.leftSideText}>USD,$</Text>
                  </TouchableOpacity>
                  <View style={styles.bottomBorder}></View>

                  <TouchableOpacity style={[styles.settingView,{marginTop:RFValue(13)}]}>
                      <Text style={styles.rightSideText}>Setting</Text>
                      <Icon
                      name={'swap'}
                      type={'AntDesign'}
                      style={{fontSize:RFValue(25),color:_Yellow}}
                      />
                  </TouchableOpacity>
                  <View style={[styles.bottomBorder,{marginTop:RFValue(13)}]}></View>

                  <TouchableOpacity style={[styles.settingView,{marginTop:RFValue(13)}]}>
                      <Text style={styles.rightSideText}>Support center</Text>
                      <Icon
                      name={'questioncircleo'}
                      type={'AntDesign'}
                      style={{fontSize:RFValue(20),color:_Yellow}}
                      />
                  </TouchableOpacity>
                  <View style={[styles.bottomBorder,{marginTop:RFValue(13)}]}></View>

                 <TouchableOpacity style={[styles.settingView,{marginTop:RFValue(13)}]}>
                      <Text style={styles.rightSideText}>Report a problem</Text>
                      <Icon
                      name={'exclamationcircleo'}
                      type={'AntDesign'}
                      style={{fontSize:RFValue(20),color:_Yellow}}
                      />
                  </TouchableOpacity>
                  <View style={[styles.bottomBorder,{marginTop:RFValue(13)}]}></View>

                  <TouchableOpacity style={[styles.settingView,{marginTop:RFValue(13)}]}>
                      <Text style={styles.rightSideText}>Rate the app</Text>
                      <Icon
                      name={'star'}
                      type={'EvilIcons'}
                      style={{fontSize:RFValue(28),color:_Yellow}}
                      />
                  </TouchableOpacity>
                  <View style={[styles.bottomBorder,{marginTop:RFValue(13)}]}></View>
                  

                  <TouchableOpacity style={[styles.settingView,{marginTop:RFValue(13)}]}>
                      <Text style={styles.rightSideText}>Privacy policy</Text>
                      <Icon
                      name={'lock'}
                      type={'EvilIcons'}
                      style={{fontSize:RFValue(29),color:_Yellow}}
                      />
                  </TouchableOpacity>
                  <View style={[styles.bottomBorder,{marginTop:RFValue(13)}]}></View>

                  <TouchableOpacity style={[styles.settingView,{marginTop:RFValue(13)}]}>
                      <Text style={styles.rightSideText}>Terms of service</Text>
                      <Icon
                      name={'file-outline'}
                      type={'MaterialCommunityIcons'}
                      style={{fontSize:RFValue(21),color:_Yellow}}
                      />
                  </TouchableOpacity>
                  <View style={[styles.bottomBorder,{marginTop:RFValue(13)}]}></View>

                  <TouchableOpacity style={[styles.settingView,{marginTop:RFValue(13)}]}>
                      <Text style={styles.rightSideText}>Log out</Text>
                      <Icon
                      name={'log-out'}
                      type={'Feather'}
                      style={{fontSize:RFValue(22),color:_Yellow}}
                      />
                  </TouchableOpacity>
                  <View style={[styles.bottomBorder,{marginTop:RFValue(13)}]}></View>
                  <View style={[styles.settingView,{marginTop:RFValue(13)}]}>
                      <Text style={styles.version}>Version <Text style={styles.version}>3.1.9</Text> </Text>
                  </View>
                 
                </Content>
                <View style={{height:screenHeight*0.1}}>
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
            </SafeAreaView>
        )
    }
}