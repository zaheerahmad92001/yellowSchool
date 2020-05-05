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
    goBack = () => {
this.props.navigation.pop()
    }
    _bookLesson = () => {
        this.props.navigation.navigate("SlotsAvailable")
    }
    render() {
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
                        <_TextInput
                            squarInput={true}
                            placeholderTextColor={lightGrey}
                            inputBox={styles.inputStyle}
                            placeholder={'1984-1989'}
                            onChangeText={(value) => this.setState({ education: value })}
                        />
                <Text style={[styles.headingText,{marginBottom:RFValue(5),marginTop:RFValue(10)}]}>MIT</Text>
                        <_TextInput
                            squarInput={true}
                            placeholderTextColor={lightGrey}
                            inputBox={styles.inputStyle}
                            placeholder={'EE'}
                            onChangeText={(value) => this.setState({ mit: value })}
                        />
                
                    <Text style={[styles.headingText,{marginBottom:RFValue(5),marginTop:RFValue(10)}]}>Certifications</Text>
                        <_TextInput
                            squarInput={true}
                            placeholderTextColor={lightGrey}
                            inputBox={styles.inputStyle}
                            placeholder={'1984-1989'}
                            onChangeText={(value) => this.setState({ certification: value })}
                        />
                         <Text style={[styles.headingText,{marginBottom:RFValue(5),marginTop:RFValue(10)}]}>tefi</Text>
                        <_TextInput
                            squarInput={true}
                            placeholderTextColor={lightGrey}
                            inputBox={styles.inputStyle}
                            placeholder={'TEFL diploma'}
                            onChangeText={(value) => this.setState({ tef1: value })}
                        />
                         <_TextInput
                            squarInput={true}
                            placeholderTextColor={lightGrey}
                            inputBox={[styles.inputStyle,{marginTop:RFValue(15)}]}
                            placeholder={'1984-1989'}
                            onChangeText={(value) => this.setState({ tef2: value })}
                        />
                  <Text style={[styles.headingText,{marginBottom:RFValue(5),marginTop:RFValue(10)}]}>tefi</Text>
                        <_TextInput
                            squarInput={true}
                            placeholderTextColor={lightGrey}
                            inputBox={styles.inputStyle}
                            placeholder={'TEFL diploma'}
                            onChangeText={(value) => this.setState({ tef3: value })}
                        />
                         <_TextInput
                            squarInput={true}
                            placeholderTextColor={lightGrey}
                            inputBox={[styles.inputStyle,{marginTop:RFValue(15)}]}
                            placeholder={'1984-1989'}
                            onChangeText={(value) => this.setState({ tef4: value })}
                        />
                 <Text style={[styles.headingText,{marginBottom:RFValue(5),marginTop:RFValue(10)}]}>kjd</Text>
                 <_TextInput
                            squarInput={true}
                            placeholderTextColor={lightGrey}
                            inputBox={styles.inputStyle}
                            placeholder={'TEFL diploma'}
                            onChangeText={(value) => this.setState({ kjd: value })}
                        />
                    </View>
                </View>
                <_BottomStaticButton
                    perHourPriceText={{ color: White }}
                    BookLesson={() => this._bookLesson()}
                />
            </SafeAreaView>
        )
    }
} 