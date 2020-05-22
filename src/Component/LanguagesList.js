import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
}from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderBottom, Black, lightGrey, _Yellow } from '../Colors';
import { Icon, Thumbnail } from 'native-base';


const LanguageList=(props)=>{
return(
   <View style={{margin:20, borderBottomColor:lightGrey,borderBottomWidth:0.5}}>
       <TouchableOpacity style={{marginBottom:10}}
       onPress={props.onSelectLanguage}>
           <View style={{justifyContent:'center',alignItems:'center',marginBottom:30}}>
          <Image
          style={{width:RFValue(170),height:RFValue(170)}}
           source={props.item.url}
           />
           <Text style={{marginTop:20}}>{props.item.name}</Text>
        </View>
       </TouchableOpacity>
   </View>

    // <TouchableOpacity style={styles.container}
    // onPress={props.onSelect}
    // >
    //     <View style={{flexDirection:'row',justifyContent:"space-between"}}>
    //      <Text style={props.item.selected ?[styles.nonSelectedLanguage,{color:Black}]:[styles.nonSelectedLanguage]}>{props.item.name}</Text>
    //    {props.item.selected ? 
    //     <Icon
    //     name={'check'}
    //     type={'MaterialIcons'}
    //     style={{color:_Yellow,fontSize:RFValue(20)}}
    //     />
    //    :null
    //    }
    //     </View>
    // <View style={styles.bottomBorder}></View>
    // </TouchableOpacity>
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