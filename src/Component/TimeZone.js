import React ,{Component}from 'react';
import{View,StyleSheet,Text}from 'react-native';
import { lightYellow, _Yellow } from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const _TimeZone =(props)=>{
    return(
        <View style={styles.container}>
        <Text style={styles.Time}>{props.item.time}</Text>
       </View>
    )
}
export default _TimeZone;
const styles =StyleSheet.create({
container:{
    backgroundColor:lightYellow,
    width:'35%',
    justifyContent:'space-between',
   // justifyContent:'center',
    alignItems:'center',
    paddingVertical:RFValue(15),
    marginTop:RFValue(10),
    borderRadius:RFValue(10),
    marginRight:RFValue(40)
},
Time:{
    color:_Yellow,
    fontWeight:'600',
    fontSize:RFValue(12)
}
})