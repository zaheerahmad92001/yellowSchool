import {StyleSheet}from 'react-native';
import { White, Black, lightGreen, lightGrey } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:White,
    },
    content:{
        flex:8.5,
    },
    textMessage:{
        color:Black,
        fontSize:RFValue(20),
        fontWeight:'600',
    },
    subHeading:{
     marginTop:RFValue(10), 
     color:lightGrey,
     fontWeight:'500',
     fontSize:RFValue(14)
    },
    tutorButtonView:{
    marginTop:RFValue(20),
    marginBottom:RFValue(5)
    },
    loginButtonView:{
    marginTop:RFValue(10),
    marginBottom:RFValue(10)
    },
    bottomNavigator:{
        flex:1.5
    }
})