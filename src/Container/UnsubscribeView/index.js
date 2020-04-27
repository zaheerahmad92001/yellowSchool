import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow } from '../../Colors';
import _Button from '../../Component/_Button';
export default class UnsubsribeView extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    _Unsubscribe=()=>{

    }
    _Cancel=()=>{
     //   this.props.navigation.pop()
    }
    render() {
        return (
            <View style={styles.container}>
                <_AppHeader
                    leftText={'Done'}
                    headerText={"MYSETTINGS"}
                />
                <View style={styles.content}>
                    <View style={styles.ConfirmView}>
                        <Text style={styles.text}>Are you sure</Text>
                        <Icon
                            name={'close'}
                            type={'MaterialCommunityIcons'}
                            style={{ fontSize: RFValue(20), color: _Yellow, }}
                        />
                    </View>
                    <View style={styles.bottomBorder}></View>
                    <View style={styles.infoTextView}>
                        <Text style={styles.infoTextStyle}>
                            The first and most important principle to be observed in constructing a paragraph
                            is that of UNITY.Just as each sentence deals with one thought, each paragraph must
                            deal with one topic or idea – and with no more than one. In writing an essay, for
                            example, every head, and every sub-head, should have its own paragraph to itself.
                            And every sentence in the paragraph must be closely connected with the main topic
                            of the paragraph. The paragraph and every part of it must be the expression of one theme or topic.
                </Text>
                    </View>
                    <View style={styles.ButtonView}>
                    <_Button
                    styles={styles.buttonStyle}
                    textButton={'Unsubsribe from all'}
                    onPress={()=>this._Unsubscribe()}
                    />
                    </View>
                    <View style={styles.ButtonView}>
                    <_Button
                    textButton={'Cancel'}
                    onPress={()=>this._Cancel()}
                    />
                    </View>
                </View>
            </View>
        )
    }
}