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
import { _Yellow, White } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import _BottomNavigation from '../../Component/bottomNavigation';
import _AppHeader from '../../Component/AppHeader';
import _BottomStaticButton from '../../Component/bottomStaticButton';
import _AgeList from '../../Component/studentAgeList';
const studenstLevel=[
    {level:'Beginner'},
    {level:'Preintermediate'},
    {level:'Intermediate'},
    {level:'Advance'},
    {level:'Profiency'},
]

export default class LevelOfStudents extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    renderLevelOfStudents=({item})=>{
        return(
            <_AgeList
            item={item}
            levelOfStudents={true}
            />
        )
    }
    goBack=()=>{
this.props.navigation.pop()
    }
_bookLesson=()=>{
 this.props.navigation.navigate("SlotsAvailable")
}
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{ color: White }}
                    leftText={'Back'}
                    headerText={'LEVEL OF STUDENTS'}
                    leftIconPress={() => this.goBack()}
                    leftPress={() => this.goBack()}
                />
                <View style={styles.content}>
            <FlatList
            data={studenstLevel}
            keyExtractor={(item)=>item.key}
            renderItem={this.renderLevelOfStudents}
            />
                </View>
                <_BottomStaticButton
                perHourPriceText={{color:White}}
                BookLesson={()=>this._bookLesson()}
                />
            </SafeAreaView>
        )
    }
}