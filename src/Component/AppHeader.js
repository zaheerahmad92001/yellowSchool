import React ,{Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform
}from 'react-native';
import { headerColor, White ,_Yellow, Black} from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon, Header } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {height:screenHeight,width:screenWidth} = Dimensions.get('window');
const _AppHeader =(props)=>{
return(
<View style={[styles.container,props.styles ]}>
  <StatusBar backgroundColor={_Yellow} barStyle={'light-content'}/>
<View style={{flex:1,flexDirection:'row',alignItems:'flex-end',bottom:RFValue(15)}}>
 <View style={{flex:3,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
     <Icon
     name={props.leftIcon}
     type={'MaterialIcons'}
     style={[styles._leftIconStyle,props.leftIconStyle]}
     onPress={props.leftIconPress}
     />
      <TouchableOpacity
      onPress={props.leftPress} >
     <Text style={[styles.leftSideText,props.leftTextStyle]}>{props.leftText}</Text>
     </TouchableOpacity>
 </View>

 <View style={{flex:6.5,justifyContent:'center',alignItems:'center'}}>
     <Text style={[styles.leftSideText,props.centerTextStyle]}>{props.headerText}</Text>
 </View>
 <View style={{flex:3.5,justifyContent:'center',alignItems:'center',}}>
   <TouchableOpacity 
   onPress={props.rightPress}>
<Text style={[styles.leftSideText,props.rightTextStyle]}>{props.rightText}</Text>
</TouchableOpacity>
 </View>
</View>



   {/* <View style={styles.content}>
 <View style={props.leftIcon ?[styles.leftSideHeader]:[styles.leftSideHeaderWithoutIcon]}>
 
     <TouchableOpacity  style={Platform.OS==='android' ? [styles.leftSideHeaderTouchable]:[styles.leftSideHeaderTouchable]}
     onPress={props.leftPress}>
   <Icon
   name={props.leftIcon}
   type={'MaterialIcons'}
   style={[props.leftIconStyle,{marginTop:RFValue(6)}]}
   />
   <Text style={[styles.HeaderText,props.leftTextStyle,{marginTop:6}]}>{props.leftText}</Text>
   </TouchableOpacity>
 </View>
 <View style={Platform.OS==='ios'?[styles.centerHeader,{paddingVertical:RFValue(3)}]:[styles.centerHeader,{paddingVertical:RFValue(8)}]}>
<Text style={[styles.HeaderText,props.centerTextStyle]}>{props.headerText}</Text>
 </View>
 <View style={styles.rightSideHeader}>
<Text style={[styles.HeaderText,props.rightTextStyle]}>{props.rightText}</Text>
 </View>
   </View> */}
</View>
)
}
export default _AppHeader;
const styles = StyleSheet.create({
container:{
    width:screenWidth,
    height:screenHeight*0.10,
    backgroundColor:_Yellow,
    borderBottomLeftRadius:RFValue(32),
    borderBottomRightRadius:RFValue(32),
    
},

leftSideText:{
color:White,
fontWeight:'500',
fontSize:RFValue(14)

},
_leftIconStyle:{
 fontSize:RFValue(25),
 color:Black
}



})