import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions,
} from 'react-native';
import styles from './styles';
import _BottomNavigation from '../../Component/bottomNavigation';
import { _Yellow, White } from '../../Colors';
import { CardItem, Left, Body, Right, Thumbnail, Item, Content } from 'native-base';
import _AllMessages from '../../Component/allMessages';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import _Button from '../../Component/_Button';
import _MyTutorsList from '../../Component/MyTutorsList';
const {height:screenHeight,width:screenWidth}= Dimensions.get('window')
const tutorList=[
    {name:'Karen',availableHours:'5 hours to schedule'},
    {name:'Asad',availableHours:'5 hours to schedule'},
    {name:'Mateen',availableHours:'5 hours to schedule'},
    {name:'Karen',availableHours:'5 hours to schedule'},
]
export default class ScheduledLesson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: true,
            changeSettingIconColor: false
        }
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
    _viewAllLesson = () => {

    }
    renderTutorList=({item})=>{
        return(
            <_MyTutorsList
            item={item}
            />
        )}
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={_Yellow} barStyle={'light-content'} />
                <Content style={{height:screenHeight*0.87}}>
                <View style={styles.content}>

                    <View style={styles.upCommingLessonView}>
                        <Text style={styles.tomorrowText}>TOMORROW</Text>
                        <View style={styles.upCommingBox}>
                            <View style={{ width: '50%' }}>
                                <Text style={styles.LessonWith}>English lesson with karen </Text>
                            </View>
                            <Thumbnail circular
                                style={{ alignSelf: 'flex-start' }}
                                source={require('../../Assets/ayezakhan.jpeg')}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <_Button
                            textButton={'View all lessons'}
                            onpress={() => this._viewAllLesson()}
                        />
                    </View>
                    <View style={styles.availableTutors}>
                  <Text style={styles.myTutors} >MY TUTORS</Text>
                  </View>
                <FlatList
                showsVerticalScrollIndicator={false}
                data={tutorList}
                keyExtractor={(item)=>item.key}
                renderItem={this.renderTutorList}
                />
                </View>
                </Content>
                <View style={{height:screenHeight*0.13}}>
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