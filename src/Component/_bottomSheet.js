import React ,{Component}from 'react';
import{
    TouchableOpacity,
    View,StyleSheet,
    Text,
    Dimensions
}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow, Black, White, fbColor, googleColor } from '../Colors';
import { Icon } from 'native-base';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const _BottomSheet=(props)=>{
    return(
        // <View style={props.sigUp ?[styles.container,{height:screenHeight *0.7}]:[styles.container]}>
        <View style={{backgroundColor:_Yellow,borderTopLeftRadius:RFValue(10),borderTopRightRadius:RFValue(10)}}>
        <View style={{ marginTop:RFValue(40),marginHorizontal:RFValue(20) ,marginBottom:RFValue(10)}}>
            <View>
    <Text style={[styles._headingText,props.headingText]}>{props.Heading}</Text>
    <Text style={[styles._subHeading,props.subHeading]}>{props.subHeading}</Text>
            </View>
           
            <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:fbColor}]}
             onPress={props.logInWithFB}>
           <View style={styles.socilaButtonView}>
               <Icon
               name={props.firstIconName}
               type={props.firstIconType}
               style={{fontSize:RFValue(25),color:White}}
               />
            <Text style={[styles.buttonText]}>{props.firstButtonHeading}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:googleColor}]}
             onPress={props.logInWithGmail}>
           <View style={styles.socilaButtonView}>
               <Icon
               name={props.secondIconName}
               type={props.secondIconType}
               style={{fontSize:RFValue(20),color:White}}
               />
            <Text style={[styles.buttonText]}>{props.secondButtonHeading}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
             onPress={props.logInWithEmail}>
           <View style={styles.socilaButtonView}>
               <Icon
               name={props.thirdIconName}
               type={props.thirdIconType}
               style={{fontSize:RFValue(16),color:_Yellow}}
               />
            <Text style={[styles.buttonText,{color:_Yellow}]}>{props.thirdButtonHeading}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonStyle,
            {backgroundColor:_Yellow, borderColor:White,
             borderWidth:1,alignItems:'center'}]}
             onPress={ props.changeSheet}>
           <View style={styles.socilaButtonView}>
            <Text style={[styles.buttonText,{marginLeft:RFValue(0)}]}>{props.forthButtonHeading}</Text>
            </View>
            </TouchableOpacity>
           {props.sigUp ?
           <View style={styles.termsConditions}>
             <Text style={styles._subHeading}>By clickin sing up ,you agree to Terms of Services and Privacy Policy</Text>
           </View>:null
}
        </View>
    </View>

    )
}
export default _BottomSheet;
const styles = StyleSheet.create({
    container:{
     backgroundColor: _Yellow,
    height:screenHeight*0.63
    },
    buttonStyle: {
       // backgroundColor: TextColor,
        backgroundColor:'white',
        //marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: RFValue(14),
        //justifyContent: 'center',
       // alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: White,
        fontStyle: 'normal',
        fontWeight:'500' ,
        fontSize: RFValue(14),
        marginLeft:RFValue(30)
    },
    socilaButtonView:{
        flexDirection:'row',
        //justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:RFValue(15)
    },
    _headingText:{
        fontSize:RFValue(14),
        color:Black,
        fontWeight:'bold',
        textAlign:'center',
       
    },
    _subHeading:{
        fontWeight:'500',
        fontSize:RFValue(12),
        color:White,
        textAlign:'center',
        marginTop:RFValue(10),
        marginBottom:RFValue(20)
    },
    termsConditions:{
        marginTop:RFValue(5),
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'#DCDCDC'
    }
})