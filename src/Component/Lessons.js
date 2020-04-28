import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow, Black ,White} from '../Colors';
import { Thumbnail } from 'native-base';
const _Lessons=(props)=>{
    //console.log('props',props.item.day);
    return(
        <View style={styles.upCommingLessonView}>
        <Text style={styles.tomorrowText}>{props.item.day}</Text>
        <View style={styles.upCommingBox}>
            <View>
            <View style={{ width: '100%',flexDirection:'row' }}>
    <Text style={styles.LessonWith}>{props.item.subjectName}</Text>
                <Text style={[styles.LessonWith,{marginLeft:RFValue(5)}]}> lesson </Text> 
            </View>

            <View style={{ width: '100%',flexDirection:'row',marginTop:RFValue(5) }}>
            <Text style={styles.LessonWith}>with</Text>
            <Text style={[styles.LessonWith,{marginLeft:RFValue(5)}]}>{props.item.tutorName}</Text>
            </View>

            </View>
            <Thumbnail circular
                style={{ alignSelf: 'flex-start' }}
                source={require('../Assets/download.jpeg')}
            />
        </View>
    </View>
    )
}
export default _Lessons
const styles = StyleSheet.create({
    upCommingLessonView:{
        backgroundColor:_Yellow,
        paddingLeft:RFValue(15),
        paddingRight:RFValue(15),
        paddingTop:RFValue(15),
        paddingBottom:RFValue(35),
        borderRadius:RFValue(5),
marginBottom:RFValue(15)
    },
    tomorrowText:{
        color:White,
        fontSize:RFValue(12),
        fontWeight:'700',

    },
    upCommingBox:{
        flexDirection:'row',
        marginTop:RFValue(15),
        justifyContent:'space-between',
    },
    LessonWith:{
        color:Black,
        fontSize:RFValue(16),
        fontWeight:'bold',
    },
})