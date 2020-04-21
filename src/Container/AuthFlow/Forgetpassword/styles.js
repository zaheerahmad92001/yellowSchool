import {StyleSheet}from 'react-native';
import { White, Black, lightGrey } from '../../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    content:{
        marginTop:RFValue(20),
        marginHorizontal:RFValue(20)
    },
    Forgetpassword:{
        fontWeight:'700',
        fontSize:RFValue(16),
        color:Black
    },
    passresetText:{
        fontWeight:'500',
        fontSize:RFValue(14),
        color:lightGrey,
        marginTop:RFValue(8)
    },
    textInputView:{
        marginTop:RFValue(10)
      },
      Heading:{
        fontWeight:'500',
        fontSize:RFValue(14),
        color:Black
    },
    ButtonView:{
        marginTop:RFValue(30),
        justifyContent:'center',
        alignItems:'center'
    }
})