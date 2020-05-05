import React,{Component}from 'react';
import {
    StyleSheet,
    Dimensions
}from 'react-native'
import { lightGrey, White, Black, BorderBottom } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const {height:screenHeight,width:screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:lightGrey
    },
    content:{
        flex:1,
        marginHorizontal:RFValue(10),
        marginTop:RFValue(10),
        backgroundColor:White,
        borderRadius:RFValue(10) ,
        padding:RFValue(15),
        marginBottom:RFValue(15)

    },
    textStyle:{
        color:Black,
        fontSize:RFValue(14),
        fontWeight:'400'
    },
    cardInfo:{
        marginTop:RFValue(10),
        padding:RFValue(10),
        paddingBottom:RFValue(20),
        borderColor:BorderBottom,
        borderWidth:0.4
    },
    paywithCard:{
        color:Black,
        fontSize:RFValue(12),
        fontWeight:'500',
        marginLeft:RFValue(10)
    },
    paymentCards:{
        flexDirection:'row',
        marginTop:RFValue(10),
        alignItems:'center',
    },
    information:{
        marginTop:RFValue(5),
        
    },
    heading:{
        color:Black,
        fontWeight:'500',
        fontSize:RFValue(12),
        marginBottom:RFValue(5)
    },
    intputStyle:{
        borderWidth:0.5,
        borderColor:lightGrey,
        paddingHorizontal:RFValue(10),
        paddingVertical:RFValue(20),
       marginTop:RFValue(15)


    },
    buttonView:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:RFValue(20)
    },
    buttonStyle:{
    width:screenWidth*0.8
    },
    instructions:{
        marginTop:RFValue(20),
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:0.5,
        marginTop:RFValue(20)
    },
    paymentInformation:{
        marginTop: RFValue(20),
        paddingBottom:RFValue(20), 
        flexDirection: 'row',
        alignItems:'center',
       
    },
    cardInput:{
      paddingHorizontal:RFValue(10),
      paddingVertical:RFValue(5),
    },
    inputView:{
        borderColor:lightGrey,
        borderWidth:0.5,
        paddingBottom:RFValue(5),
    
    },
    secureIns:{
        color:lightGrey,
        fontWeight:"400",
        fontSize:RFValue(12)
    }
})