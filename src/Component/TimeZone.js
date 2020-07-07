import React ,{Component}from 'react';
import{View,StyleSheet,Text}from 'react-native';
import { lightYellow, _Yellow } from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { convertDateToString,getTime } from '../RandomFun';
const _TimeZone =(props)=>{
    let _time =getTime(new Date(props.item.startTime))
    return(
        <TouchableOpacity style={styles.TimeStyle}
        onPress={props._onPress}
        >
            <Text style={styles.Time}>{_time}</Text>
        </TouchableOpacity>
    //     <View style={styles.container}>
    //     <Text style={styles.Time}>{props.item.time}</Text>
    //    </View>
    )
}
export default _TimeZone;
const styles =StyleSheet.create({
// container:{
//     backgroundColor:lightYellow,
//     width:'35%',
//     justifyContent:'space-between',
//     alignItems:'center',
//     paddingVertical:RFValue(15),
//     marginTop:RFValue(10),
//     borderRadius:RFValue(10),
//     marginRight:RFValue(40)
// },
Time:{
    color:_Yellow,
    fontWeight:'600',
    fontSize:RFValue(12)
},
TimeStyle:{
   backgroundColor:lightYellow,
   marginRight:RFValue(30),
   marginVertical:RFValue(10),
   paddingVertical:RFValue(17),
   paddingHorizontal:RFValue(40),
   borderRadius:RFValue(10),
}
})