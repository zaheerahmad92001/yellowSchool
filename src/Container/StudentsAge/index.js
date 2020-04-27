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
const {height:screenHeight,width:screenWidth}= Dimensions.get('window');
const ageList =[
    {category:'Preshoolers',age:'4-6'},
    {category:'Primary school',age:'6-12'},
     {category:'Primary school',age:'12-17'},
     {category:'Undergraduate',age:'17-22'},

]
export default class StudentAge extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    renderStudentsAge =({item})=>{
        return(
            <_AgeList
            item={item}
            />
        )
    }
    goBack=()=>{
        
    }
    _bookLesson=()=>{
       
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{color:White}}
                    leftText={'Back'}
                    headerText={'STUDENT AGE'}
                    leftPress={()=>this.goBack()}
                />
                <View style={styles.content}>
            <FlatList
            data={ageList}
            keyExtractor={(item)=>item.key}
            renderItem={this.renderStudentsAge}
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