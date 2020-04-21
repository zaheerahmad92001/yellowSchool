import React ,{Component}from 'react';
import {
    View,
    Text,
    Image
}from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { White } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default class SingleTutor extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    goBack =()=>{
        this.props.navigation.navigate('Login')
    }
    render(){
        return(
            <View style={styles.container}>
               <View style={{flex:0.2,backgroundColor:'green'}}>
                 <Image
                 style={{width:'100%',height:RFValue(320),marginTop:10}}
                 source={require('../../Assets/office.jpg')}
                 />
               </View>
               
                <_AppHeader
                    styles={{position:'absolute',top:0}}
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{color:White}}
                    headerText={'Mehr T.'}
                    leftIconPress={()=>this.goBack()}
                />
               
            
               
            </View>
        )
    }
}