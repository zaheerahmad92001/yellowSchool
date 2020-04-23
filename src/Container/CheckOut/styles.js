import React,{Component}from 'react';
import {White, _Yellow, Black, lightGrey} from '../../Colors';
import {StyleSheet}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
        //flex:1,
        backgroundColor:_Yellow,
       
    },
    mainView:{
     backgroundColor:White, 
     marginHorizontal:RFValue(5),
    paddingHorizontal:RFValue(10),        
    paddingVertical:RFValue(15),
    borderRadius:RFValue(10)
},
    
    tutorProfile:{
    flexDirection:'row',
    },
    ratingView:{
        backgroundColor:White,
        top:-10,
        left:-5,
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width:'65%',
        borderRadius:RFValue(10),
        shadowOpacity:1,
    },
    reviewCount:{
        color:Black,
        fontSize:RFValue(12),
        fontWeight:'500'
    },
    NameView:{
    flexDirection:'row', 
    marginTop:RFValue(5)     
    },
    nationalFlag: {
        width: RFValue(20),
        height: RFValue(12),
        marginLeft: RFValue(3),
        marginTop: RFValue(3)
    },
    nameStyle:{
        color:_Yellow,
        fontSize:RFValue(13),
        fontWeight:'500',
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:lightGrey,
        borderBottomWidth:0.5,
        marginTop:RFValue(10)
    },
    dateTimeView:{
    marginTop:RFValue(15),
    },
    dateTime:{
        color:lightGrey,
        fontWeight:'500',
        fontSize:RFValue(12),
        marginBottom:RFValue(2)
    },
    day:{
        color:Black,
        fontWeight:'500',
        fontSize:RFValue(12),
        marginBottom:RFValue(4)
      
    },
    servicesDetailOuter:{
        marginTop:RFValue(15),
    },
    servicesDetailInner:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:RFValue(3)
    },
    oneHourlesson:{
        color:Black,
        fontWeight:'300',
        fontSize:RFValue(12), 
    },
    Price:{
        color:Black,
        fontWeight:'500',
        fontSize:RFValue(12), 
    },
    totalText:{
        flexDirection:'row',
        marginTop:RFValue(10),
        justifyContent:'space-between',
    },
    totlaRatingView:{
         borderRadius:5,
         borderColor:_Yellow,
         borderWidth:1,
        marginBottom:10,
        width:'15%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    secureCheckOut:{
        marginTop:RFValue(10),
        color:_Yellow,
        fontWeight:'500',
        fontSize:RFValue(16),
    },
    paymetnMethod:{
        marginTop:RFValue(10),
        marginBottom:RFValue(5)
    },
    paymetnmentIns:{
        flexDirection:'row',
        marginTop:RFValue(3),
        paddingRight:(3)
    },
    paymentWayOuter:{
        marginTop:RFValue(10),
        padding:RFValue(8),
        borderColor:lightGrey,
        borderWidth:0.5,
        borderRadius:RFValue(5),
    },
    paymentWayInner:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center'

    },
    MethodsView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    circleIcon:{
        fontSize: RFValue(25),
         color: _Yellow
    },
    freelessonText:{
    marginTop:RFValue(10),
    //alignItems:'center',
    //justifyContent:'center',
    flexDirection:'row',
   // marginHorizontal:RFValue(15)
    },
    freeLesson:{
        marginLeft:RFValue(15),
       // marginTop:RFValue(10),
        color:Black,
        fontWeight:'500',
        fontSize:RFValue(12),
        flex:1,
    },
    guaranteeView:{
        flexDirection:'row',
        marginTop:RFValue(15)
    },
    guaranteeText:{
        flex:9,
    },
    privacyContent:{
        marginBottom:RFValue(140),
        marginTop:RFValue(20)

    },
    privacyInnerView:{
        flexDirection:'row',
        marginLeft:RFValue(10),
        marginHorizontal:RFValue(15)
    },
    copyRightView:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        marginTop:RFValue(10)
    },
    termsOfService:{
        color:White,
        marginRight:RFValue(7),
        fontSize:RFValue(12),
        fontWeight:'500',
    }
})