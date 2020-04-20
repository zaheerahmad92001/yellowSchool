import React ,{Component}from 'react';
import{
    View,
    Text,
    Dimensions
}from 'react-native'
import styles from './styles';
import _AppHeader from '../../../Component/AppHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import _TextInput from '../../../Component/Input';
import _Button from '../../../Component/_Button';
import { Black, White } from '../../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default class Forgetpassword extends Component {
    constructor(props){
        super(props)
        this.state={
            email:''
        }
    }
    goBack =()=>{
        this.props.navigation.navigate('Login')
    }
    render(){
        return(
            <View style={styles.container}>
             <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{color:White}}
                    leftText={'Login'}
                    headerText={'RESET PASSWORD'}
                    leftPress={()=>this.goBack()}
                // leftText={'test'}
                />
                <View style={styles.content}>
                  <Text style={styles.Forgetpassword}>Forget your password ?</Text>
                  <Text style={styles.passresetText}>
                      Enter your email address and we`ll send you link to reset your password
                  </Text>
                <Text style={[styles.Heading,{marginTop:RFValue(25)}]}>Email</Text>
               <View style={styles.textInputView}>
               <_TextInput
               placeholder={'Enter email'}
               onChangeText={(value)=> this.setState({email:value})}
               value={this.state.email}
               />
               <View style={styles.ButtonView}>
                        <_Button
                        styles={{height:screenHeight*0.06,width:screenWidth*0.9}}
                            textButton={'Send Link'}
                        ></_Button>
                    </View>
               </View>
                </View>
            </View>
        )
    }
}