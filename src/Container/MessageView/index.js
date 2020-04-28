import React, { Component } from 'react';
import {
    View,
    Text,
    Image, Dimensions,
    FlatList,
    SafeAreaView,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { White, _Yellow, Black, lightGrey } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import FromMessage from '../../Component/MessageComponent';
import { TextInput } from 'react-native-gesture-handler';
import { Container, Content,Icon } from 'native-base';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default class MessageView extends Component{
    constructor(props){
    super(props)
    this.state={
        message:'',
        showMessage:true,
    }
    }
    goBack=()=>{
        this.props.navigation.navigate('Login')
    }
    _bookLesson=()=>{
    
    }
    _sendMessage=()=>{
     
    }
    render(){
        return(
            <View style={styles.container}>
            <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{color:White}}
                    leftText={'Back'}
                    headerText={'Meht T.'}
                    leftPress={()=>this.goBack()}
                    rightText={'Book lesson'}
                    rightPress={()=>this._bookLesson()}
                
                />
   
            <KeyboardAvoidingView behavior={"padding"} style={{flex:0.8,backgroundColor:White,justifyContent:"flex-end"}}>

             {/* {this.state.showMessage ?  */}

            <FromMessage/>
            
                        
           {/* <View>
           <View style={{flex:3}}></View>
            <View style={{flex:7,marginHorizontal:RFValue(20),alignItems:'center'}}>
            <Text style={styles.textMessage}>Start a conversation</Text>
            <Text style={styles.subHeading}>Send the friendly message to this tutor</Text>
            <Text style={styles.subHeading}>Share your goals and ask about their</Text>
            <Text style={styles.subHeading}>teaching methods</Text>
            </View>
            </View> */}
            
            
            </KeyboardAvoidingView> 

            <View style={{justifyContent: 'flex-end',flex:0.1 }}>
             <View style={styles.messageBox}>
                <TextInput
                    style={[{
                        color: '#222326',
                        fontSize: RFValue(14),
                        //marginHorizontal: 10,
                        height: screenHeight * 0.07,
                        flex: 1
                    }]}
                    autoFocus={true}
                    placeholder={'say some thing '}
                    placeholderTextColor={'#979797'}
                    value={this.state.message}
                    onChangeText={(value) => { this.setState({message:value}) }}
                />
                <View style={styles.circle}>
                <Icon 
                onPress={()=>this._sendMessage()}
                name={'arrowup'} 
                type={'AntDesign'} 
                style={{ fontSize: RFValue(23), size: RFValue(16), color:_Yellow,
            }}

    />
                </View>
   

</View>

</View>
            </View>
        )
    }
}