import React ,{Component}from 'react';
import {StyleSheet,Dimensions}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _Yellow,White, lightGreen, lightGrey, darkYellow, Black } from '../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        marginTop:RFValue(0),
    },
    accountText:{
        color:_Yellow,
        fontWeight:'500',
        fontSize:RFValue(16),
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:0.5,
        marginTop:RFValue(20)
    },
    profilePhoto:{
    color:Black,
    fontSize:RFValue(12),
    fontWeight:'500',
    marginBottom:RFValue(2)
    },
    profileView:{
        flexDirection:'row',
        marginTop:RFValue(10)
    },
    ImageView:{
    flex:1
    },
    ButtonView:{
     flex:1
    },
    uploadButtonView:{
        width:screenWidth*0.45,
        height:screenHeight*0.05,
        backgroundColor:White,
        borderWidth:1,
        borderColor:_Yellow,
        marginTop:RFValue(10),
        borderRadius:RFValue(5)
    },
    fileSize:{
        color:lightGrey,
        fontSize:RFValue(12),
        fontWeight:'300',
        marginTop:RFValue(5)
    },
    fileType:{
        color:lightGrey,
        fontSize:RFValue(12),
        fontWeight:'300',
    },
    EditView:{
        flexDirection:'row',
        backgroundColor:darkYellow,
        width:RFValue(140),
        top:-10,
        paddingVertical:RFValue(3),
        justifyContent:'center',
    },
    editText:{
        marginHorizontal:RFValue(5),
        fontWeight:"500",
        color:White,
        fontSize:RFValue(12),
        
    }
        
   
})