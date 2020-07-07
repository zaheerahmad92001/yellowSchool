import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { White, lightGrey } from '../../Colors'
import _BottomStaticButton from '../../Component/bottomStaticButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import _TextInput from '../../Component/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import _AgeList from '../../Component/studentAgeList'
import _Resume from '../../Component/_Education';
export default class ResumeView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            education: '',
            mit:'',
            certification:'',
            tef1:'',tef2:'',tef3:'',tef4:'',
            kjd:''
        }
    }

    renderEducation=({item})=>{
       return(
           <_Resume
           item={item}
           education={true}
           />
       )
    }
    renderCertification=({item})=>{
       return(
           <_Resume
           item={item}
           education={false}
           />
       )
    }

    goBack = () => {
this.props.navigation.pop()
    }
    _bookLesson = () => {
        this.props.navigation.navigate("SlotsAvailable")
    }
    render() {
        const Education = this.props.navigation.getParam('education')
        const Certification = this.props.navigation.getParam('certification')
        const hourlyRate = this.props.navigation.getParam('hourlyRate')
        return (
            <SafeAreaView style={styles.container}>
                <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{ color: White }}
                    leftText={'Back'}
                    headerText={'RESUME'}
                    leftIconPress={() => this.goBack()}
                    leftPress={() => this.goBack()}
                />
                <View style={styles.content}>
                    <View style={styles.subContent}>
                        <Text style={[styles.headingText,{marginBottom:RFValue(5)}]}>Education</Text>
                        <FlatList
                       
                        extraData={Education}
                        data={Education}
                        keyExtractor={(item) => { item.id }}
                        renderItem={this.renderEducation}
                        showsVerticalScrollIndicator={false}
                    />
                    </View>
                    <View style={[styles.subContent,{marginTop:10}]}>
                     <Text style={[styles.headingText,{marginBottom:RFValue(5)}]}>Certification</Text>
                        <FlatList
                        extraData={Certification}
                        data={Certification}
                        keyExtractor={(item) => { item.id }}
                        renderItem={this.renderCertification}
                        showsVerticalScrollIndicator={false}
                    />
                    </View>
                </View>
                <_BottomStaticButton
                    perHourPriceText={{ color: White }}
                    BookLesson={() => this._bookLesson()}
                    perHour={hourlyRate}
                />
            </SafeAreaView>
        )
    }
} 