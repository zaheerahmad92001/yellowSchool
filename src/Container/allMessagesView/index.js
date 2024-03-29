import React,{Component}from 'react';
import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
}from 'react-native';
import styles from './styles';
import _BottomNavigation from '../../Component/bottomNavigation';
import { _Yellow } from '../../Colors';
import { CardItem, Left, Body, Right, Thumbnail, Item } from 'native-base';
import _AllMessages from '../../Component/allMessages';
import { FlatList } from 'react-native-gesture-handler';
const Message=[
    {name:'Karen',message:'Hi Mudassir'},
    {name:'zaheer',message:'Hi Mudassir'},
    {name:'Ahmad',message:'Hi Mudassir'},
    {name:'Karen',message:'Hi Mudassir'},
    {name:'Asad',message:'Hi Mudassir'},
    {name:'Karen',message:'Hi Mudassir'},
    {name:'Mateen',message:'Hi Karen'},
    {name:'Rouf',message:'Hi Karen'},
    {name:'Karen',message:'Hi Mudassir'},
    {name:'Karen',message:'Hi Mudassir'},  
]
export default class AllMessages extends Component{
    constructor(props){
        super(props)
        this.state={
            changeSearchIconColor: false,
            changeMessageIconColor:true,
            changeUserIconColor: false,
            changeSettingIconColor: false
        }
    }
    _Search = () => {
        // this.setState({
        //     changeSearchIconColor: true,
        //     changeMessageIconColor: false,
        //     changeUserIconColor: false,
        //     changeSettingIconColor: false
        // })
        this.props.navigation.navigate('LessonIntroView')  
    }
    _MessageClick = () => {
        // this.setState({
        //     changeSearchIconColor: false,
        //     changeMessageIconColor: true,
        //     changeUserIconColor: false,
        //     changeSettingIconColor: false
        // })
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
    renderMessages=({item})=>{
        return(
            <_AllMessages
            item={item}
            onPress={()=>this.props.navigation.navigate('MessageView')}
            />
        )
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
         <StatusBar backgroundColor={_Yellow} barStyle={'light-content'}/>
          <View style={styles.Header}>
        <Text style={styles.messageText}>Messages</Text>
          </View>
          <View style={styles.content}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={Message}
        keyExtractor={(item)=>{item.key}}
        renderItem={this.renderMessages}
        />
          </View>
          <View style={{flex:1.1}}>
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