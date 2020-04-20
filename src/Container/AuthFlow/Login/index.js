import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './styles';
import _AppHeader from '../../../Component/AppHeader';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import _TextInput from '../../../Component/Input';
import { Black, _Yellow } from '../../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import _Button from '../../../Component/_Button';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    goBack=()=>{
        this.props.navigation.navigate('SignUp')
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <_AppHeader
                    //leftIcon={'menu'}
                    leftText={'Cancel'}
                    headerText={'LOGIN'}
                    leftPress={()=>this.goBack()}
                // leftText={'test'}
                />
                <View style={styles.content}>
                    <Text style={styles.Heading}>Email</Text>
                    <View style={styles.textInputView}>
                        <_TextInput
                            placeholder={'Enter email address'}
                            onChangeText={(value) => this.setState({ email: value })}
                            value={this.state.email}
                        />
                    </View>
                    <Text style={[styles.Heading, { marginTop: RFValue(25) }]}>Password</Text>
                    <View style={styles.textInputView}>
                        <_TextInput
                            placeholder={'Enter password'}
                            onChangeText={(value) => this.setState({ password: value })}
                            value={this.state.password}
                        />
                    </View>
                    <View style={styles.ButtonView}>
                        <_Button
                        styles={{height:screenHeight*0.06,width:screenWidth*0.9}}
                            textButton={'Login'}
                        ></_Button>
                    </View>
                    <View style={styles.forgetpass}>
                     <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('ForgetPassword')}>
                         <Text style={styles.forgetText}>Forget your password ?</Text>
                     </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}