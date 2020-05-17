import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { White } from '../../Colors';
export default class Splash extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('_AppInfo')
        },3000)
    }
    render(){
        return(
            <ImageBackground style={styles.container}

            source={require('../../Assets/splash.png')}
            >
            
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
 container:{
     flex:1,
    //  justifyContent:'center',
    //  alignItems:'center',
    //  backgroundColor:White
 }
})