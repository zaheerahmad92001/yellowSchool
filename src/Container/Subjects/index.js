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
import { FlatList } from 'react-native-gesture-handler';
const subjetList=[
    {name:'English for travelling',description:'',},
    {name:'English for learning',description:'',},
    {name:'English job interview prep',description:'',},
    {name:'English for travelling',description:'',},
    {name:'IELTS preps',description:'',},
]
export default class SubjectsView extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    goBack=()=>{

    }
    _bookLesson=()=>{
    
    }
    renderSubjects=({item})=>{
        return(
    <_Subjects
     item={item}
    />
        )}
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{ color: White }}
                    leftText={'Back'}
                    headerText={'SUBJECTS'}
                    leftPress={() => this.goBack()}
                />
                <View style={styles.content}>
                  <FlatList
                  showsVerticalScrollIndicator={false}
                  data={subjetList}
                  keyExtractor={(item)=>item.key}
                  renderItem={this.renderSubjects}
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