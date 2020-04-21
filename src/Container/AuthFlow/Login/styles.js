import {StyleSheet}from 'react-native';
import { Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Black, _Yellow } from '../../../Colors';
export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        marginTop:RFValue(20),
        marginHorizontal:RFValue(20)
    },
    Heading:{
        fontWeight:'500',
        fontSize:RFValue(14),
        color:Black
    },
    textInputView:{
        marginTop:RFValue(10)
    },
    ButtonView:{
        marginTop:RFValue(30),
        justifyContent:'center',
        alignItems:'center'
    },
    forgetpass:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
    },
    forgetText:{
        color:_Yellow,
        fontSize:RFValue(14)
    }
})