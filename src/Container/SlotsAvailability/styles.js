import {StyleSheet}from 'react-native';
import { White, _Yellow, lightGrey } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:White
    },
    content:{
        marginHorizontal:RFValue(20),
    },
    lessonTime:{
        color:_Yellow,
        fontSize:RFValue(14),
        fontWeight:'bold',
    },
    timeBelow:{
        color:lightGrey,
        fontWeight:'500',
        fontSize:RFValue(14),
        marginTop:RFValue(4)
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:1,
        marginTop:RFValue(20)
    },
    
})