import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { White } from '../../Colors';
export default class Splash extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Login')
        },1000)
    }
    render(){
        return(
            <View style={styles.container}>
              <Text style={{fontSize:RFValue(20)}}>
           wlcome to yellow school
              </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
 container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:White
 }
})