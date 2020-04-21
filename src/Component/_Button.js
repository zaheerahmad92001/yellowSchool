import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Icon } from 'native-base';
import { _Yellow, White, Black } from '../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const _Button = props => (

    <TouchableOpacity style={[styles.container, props.styles]} onPress={props.onPress} disabled={props.disabled}>
      <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:15}}>
      <Icon
        name={props.IconNmae}
        type={'MaterialCommunityIcons'}
        style={[styles.IconStyle]}
        />
        <Text style={[styles.text, props.textStyle]}>{props.textButton}</Text>
      </View>
    </TouchableOpacity>
 
);

export default _Button;

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    borderRadius: 10,
    backgroundColor:_Yellow,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft:20,
    marginRight:20
  },
  text: {
    color: White,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: RFValue(14),
    alignSelf: 'center',
    marginLeft:RFValue(10)
  },
  IconStyle:{
    color:Black,
    fontSize:RFValue(18),
    //marginLeft:5

  }
});