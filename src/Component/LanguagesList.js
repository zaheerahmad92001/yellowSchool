import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderBottom, Black, lightGrey, _Yellow } from '../Colors';
import { Icon } from 'native-base';

const LanguageList=(props)=>{
return(
    <TouchableOpacity style={styles.container}
    onPress={props.onSelect}
    >
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
         <Text style={props.item.selected ?[styles.nonSelectedLanguage,{color:Black}]:[styles.nonSelectedLanguage]}>{props.item.name}</Text>
       {props.item.selected ? 
        <Icon
        name={'check'}
        type={'MaterialIcons'}
        style={{color:_Yellow,fontSize:RFValue(20)}}
        />
       :null
       }
        </View>
    <View style={styles.bottomBorder}></View>
    </TouchableOpacity>
)
}
export default LanguageList;
const styles = StyleSheet.create({
    container:{
     paddingTop:RFValue(15),
    },
    content:{
    
    },
    bottomBorder:{
        width:'100%',
        marginTop:RFValue(15),
        borderBottomColor:BorderBottom,
        borderBottomWidth:0.5
    },
    nonSelectedLanguage:{
     color:lightGrey,
     fontSize:RFValue(14),
     fontWeight:'500'
        }
})