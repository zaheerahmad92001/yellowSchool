import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { White, lightGrey } from '../../Colors'
import _BottomStaticButton from '../../Component/bottomStaticButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import _TextInput from '../../Component/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import _Subjects from '../../Component/subjects';
import { Thumbnail } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import _Lessons from '../../Component/Lessons';
const lessons = [
    {day:'TOMORROW',subjectName:'English' ,tutorName: 'karen',},
    {day:'10 jan 2020',subjectName:'English travelling' ,tutorName: 'Asad',},
    {day:'12 jan 2020',subjectName:'English' ,tutorName: 'karen',},
    {day:'TOMORROW',subjectName:'English' ,tutorName: 'karen',},
    {day:'12 jan 2020',subjectName:'English' ,tutorName: 'Mateen',},
    {day:'TOMORROW',subjectName:'English' ,tutorName: 'karen',},
]
export default class AllLessonsView extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    goBack=()=>{

    }
    renderLessons=({item})=>{
        return(
            <_Lessons
            item={item}
            />
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{ color: White }}
                    leftText={'Back'}
                    headerText={'LESSONS'}
                    leftPress={() => this.goBack()}
                />
                <View style={styles.content}>
                
                <FlatList
                showsVerticalScrollIndicator={false}
                data={lessons}
                keyExtractor={(item)=>item.key}
                renderItem={this.renderLessons}
                />
                </View>
            </SafeAreaView>
        )
    }
}