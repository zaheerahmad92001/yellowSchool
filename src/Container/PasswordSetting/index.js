import React,{Component}from 'react';
import{
    View,
    Text,
    Dimensions,
}from 'react-native';
import styles from './styles';
import _TextInput from '../../Component/Input';
import _Button from '../../Component/_Button';
export default class PasswordSetting extends Component{
    constructor(props){
        super(props)
        this.state={
            newPassword:'',
            verifyPassword:''
        }
    }
    _saveSetting=()=>{

    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.createPassword}>Create password</Text>
                <View style={styles.bottomBorder}></View>
                <View style={styles.content}>
                <Text style={styles.Heading}>New password</Text>
                    <_TextInput
                    inputBox={styles.inputStyle}
                    placeholder={'New password'}
                    placeholderTextColor={_Yellow}
                    squarInput={true}
                    onChangeText={(value)=>this.setState({newPassword:value})}
                    secureTextEntry={true}
                    />
                    <Text style={styles.Heading}>Verify</Text>
                    <_TextInput
                    inputBox={styles.inputStyle}
                    placeholder={'Verify'}
                    placeholderTextColor={_Yellow}
                    squarInput={true}
                    onChangeText={(value)=>this.setState({newPassword:value})}
                    secureTextEntry={true}
                    />
                    <View style={styles.buttonStyle}>
                    <_Button
                    styles={[styles.saveSetting]}
                    textButton={'Save settings'}
                    onPress={()=>this._saveSetting()}
                    />
                    </View>
                </View>
            </View>
        )
    }
}