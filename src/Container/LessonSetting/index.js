import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
} from 'react-native';
import styles from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';
import { lightGrey } from '../../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _Button from '../../Component/_Button';
export default class LessonSetting extends Component {
    constructor(props){
        super(props)
        this.state={
            manuallySelect:true,
            autoSelect:false,
        }
    }
    _ManualSelect=()=>{
        this.setState({
            manuallySelect:true,
            autoSelect:false,
        })
    }
    _autoSelect =()=>{
        this.setState({
            manuallySelect:false,
            autoSelect:true,
        })
    }
    _saveChnages=()=>{
        
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.lessonSetting}>Lesson setting</Text>
                <View style={styles.bottomBorder}></View>
                <View style={styles.autoConfirmation}>
                    <Text style={styles.autoConfirmationText}>Autoconfirmation</Text>
                    <View style={{ marginTop: RFValue(10) }}>
                        <Text style={styles.instructions}>All lessons will be confirmed automatically 72 hours after the schedule end time unless
                        you report an issue.
                        </Text>
                        <Text style={[styles.instructions, { marginTop: RFValue(5) }]}>Choose automatic confirmation if you trust your turors and there are no issues with scheduling
                        lessons through the preply Calendar.
                        </Text>
                        <View style={styles.autoConfirmation}>
                            <TouchableOpacity style={{ flexDirection: 'row',alignItems:"center" }}
                            onPress={()=>this._ManualSelect()}
                            >
                                <Icon
                                    name={this.state.manuallySelect ? 'dot-circle-o' : 'circle-thin'}
                                    type={'FontAwesome'}
                                    style={this.state.manuallySelect ? [styles.circleIcon] : [styles.circleIcon, { color:lightGrey }]}
                                />
                                <Text style={styles.manuallyText} >i want to confirm each lesson manually</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row',alignItems:"center",marginTop:RFValue(5)}}
                            onPress={()=>this._autoSelect()}
                            >
                                <Icon
                                    name={this.state.autoSelect ? 'dot-circle-o' : 'circle-thin'}
                                    type={'FontAwesome'}
                                    style={this.state.autoSelect ? [styles.circleIcon] : [styles.circleIcon, { color:lightGrey }]}
                                />
                                <Text style={styles.manuallyText}>confirm lessons automatically after 72 hours</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.autoConfirmation}>
                        <Text style={[styles.instructions,{fontWeight:'500'}]}>Autoconfirmation for lessons in the preply space </Text>
                        <Text style={[styles.instructions,{marginTop:RFValue(5)}]}>
                        The first and most important principle to be observed in constructing a paragraph
                         is that of UNITY.Just as each sentence deals with one thought, each paragraph must
                          deal with one topic or idea – and with no more than one. In writing an essay, for 
                          example, every head, and every sub-head, should have its own paragraph to itself. 
                          And every sentence in the paragraph must be closely connected with the main topic
                           of the paragraph. The paragraph and every part of it must be the expression of one theme or topic.
                        </Text>
                    </View>

                    <View style={styles.buttonStyle}>
                    <_Button
                    styles={[styles.saveCard]}
                    textButton={'Save changes'}
                    onPress={()=>this._saveChnages()}
                    />
                    </View>
                </View>
            </View>
        )
    }
}