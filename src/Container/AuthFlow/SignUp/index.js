import React, {Component}from 'react';
import { View, Text ,StatusBar,Dimensions} from 'react-native';
import _AppHeader from '../../../Component/AppHeader';
import _TextInput from '../../../Component/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './styles';
import _Button from '../../../Component/_Button';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
    _Done=()=>{
        
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
             <_AppHeader
             leftText={'Done'}
             headerText={'SIGN UP'}
             leftPress={()=>this._Done()}
             />
             <View style={styles.content}>
               <Text style={styles.Heading}>Name</Text>
               <View style={styles.textInputView}>
               <_TextInput
               placeholder={'Your name'}
               onChangeText={(value)=> this.setState({name:value})}
               value={this.state.name}
               />
               </View>
               <Text style={[styles.Heading,{marginTop:RFValue(25)}]}>Email</Text>
               <View style={styles.textInputView}>
               <_TextInput
               placeholder={'Enter email'}
               onChangeText={(value)=> this.setState({email:value})}
               value={this.state.email}
               />
               </View>
               <Text style={[styles.Heading,{marginTop:RFValue(25)}]}>Password</Text>
               <View style={styles.textInputView}>
               <_TextInput
               placeholder={'Enter password'}
               onChangeText={(value)=> this.setState({password:value})}
               value={this.state.password}
               />
               </View>
               <View style={styles.ButtonView}>
                        <_Button
                        styles={{height:screenHeight*0.06,width:screenWidth*0.9}}
                            textButton={'Sign Up'}
                        ></_Button>
                    </View>
             </View>
            
            </View>
        )
    }
}