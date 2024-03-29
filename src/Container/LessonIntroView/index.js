import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform,
    SafeAreaView
} from 'react-native';
import { headerColor, White, _Yellow, Black, lightGrey, offWhite } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon, Header, Container } from 'native-base';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import styles from './styles'
import _BottomNavigation from '../../Component/bottomNavigation';
import _Button from '../../Component/_Button';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default class  LessonIntroView extends Component{
    constructor(props){
        super(props)
        this.state={
            changeSearchIconColor: true,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: false
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
    render(){
        
        //const param = this.props.route.params.param
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={_Yellow} barStyle={'light-content'}/>
                <View style={styles.content}>
                   <View style={{flex:3}}></View>

                   <View style={{flex:5,marginHorizontal:RFValue(20)}}>
                      <Text style={styles.textMessage}>You`ll see yours tutors and lessons schedule here</Text>
                      <Text style={styles.subHeading}>Your lesson schedule is the path to success. Find a tutor and book your first lesson to start</Text>
                      <View style={styles.tutorButtonView}>
                        <_Button
                        styles={{width:screenWidth*0.35,marginLeft:0}}
                        onPress={()=>this.props.navigation.navigate('AllTutorList')}
                        textButton={'Find a tutor'}
                        />
                      </View>
                      <View style={styles.loginButtonView}>
                        <_Button
                        styles={{width:screenWidth*0.25,marginLeft:0,backgroundColor:offWhite}}
                        textStyle={{color:Black}}
                        textButton={'Login'}
                        onPress={()=>this.props.navigation.navigate('Account')}
                        />
                      </View>
                   </View>

                </View>



                <View style={styles.bottomNavigator}>
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