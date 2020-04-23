import React,{Component}from 'react';
import {View,Text,Dimensions,StyleSheet}from 'react-native';
import {Icon}from 'native-base';
import {RFValue}from 'react-native-responsive-fontsize';
import { _Yellow, White,Black } from '../Colors';
import _Button from './_Button';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const _BottomStaticButton=(props)=>{
    return(
<View style={[styles.container,props.containerStyle]}>
          <View style={styles.content}>
              <View>
              <Text style={styles.ratePerHour}>$18 per hour</Text>  
              <View style={{flexDirection:'row'}}> 
              <Icon
              name={'check'}
              type={'Feather'}
              style={{color:White,fontSize:RFValue(16),marginTop:RFValue(3)}}
              />
              <Text style={styles.refund}>Full refund</Text>
              </View> 
              </View>
           <View  style={{justifyContent:'center',alignItems:'center'}}>
               <_Button
               styles={{backgroundColor:White,width:screenWidth*0.4}}
               textButton={'Book lesson'}
               textStyle={{color:_Yellow,fontWeight:'300'}}
               />
           </View>
          </View>
           
       </View>
    )}
    export default _BottomStaticButton;
    const styles  = StyleSheet.create({
 container:{
    backgroundColor:_Yellow,
    height:screenHeight*0.1,
 },
 content:{
    flexDirection:'row',
    marginHorizontal:RFValue(15),
    justifyContent:'space-between',
    marginVertical:RFValue(10)
 },
 ratePerHour:{
    color:Black,
    fontSize:RFValue(14),
    fontWeight:'500'
 },
 refund:{
    marginTop:RFValue(3),
    color:White,
    fontWeight:'300',
    fontSize:RFValue(14)
 }
    })