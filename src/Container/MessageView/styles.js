import {StyleSheet}from 'react-native';
import { White,_Yellow ,lightGrey} from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:White
    },
    messageBox:{
        flexDirection: 'row', 
        marginHorizontal:10,
        paddingHorizontal:20,
      backgroundColor:_Yellow,
      borderRadius: 10, 
      alignItems: 'center' , 
      marginBottom:RFValue(10)
    },
    circle:{
        backgroundColor:White,
        width:RFValue(30),
        height:RFValue(30),
        borderRadius:RFValue(30/2),
        alignItems:'center',
        justifyContent:'center'
    },
    textMessage:{
        color:_Yellow,
        fontSize:RFValue(20),
        fontWeight:'600',
    },
    subHeading:{
        //marginTop:RFValue(10), 
        color:lightGrey,
        fontWeight:'500',
        fontSize:RFValue(14)
       },
})