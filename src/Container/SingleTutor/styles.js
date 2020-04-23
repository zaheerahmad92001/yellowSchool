import{StyleSheet, DevSettings}from 'react-native';
import { White, Black, _Yellow } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:White
    },
    tutorInfo:{
    marginHorizontal:RFValue(14),
    flexDirection:'row',
    marginTop:RFValue(10)
    },
    nationalFlag: {
        width: RFValue(15),
        height: RFValue(10),
        marginLeft: RFValue(3),
        marginTop: RFValue(3)
    },
    tutorExperience:{
        color:Black,
        fontSize:RFValue(12),
        fontWeight:'500',
        marginTop:RFValue(5)
    },
    Nametext:{
        color:Black,
        fontSize:RFValue(14),
        fontWeight:'500',
    },
    Verified:{
        color:_Yellow,
        fontSize:RFValue(12),
        fontWeight:'500',
        marginLeft:RFValue(5)
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:_Yellow,
        borderBottomWidth:1,
        marginTop:RFValue(10)
    },
    userStatics:{
    flexDirection: 'row',
    marginHorizontal:RFValue(15),
    marginTop:RFValue(10) ,
    justifyContent:"space-between"
},
ratingStyle:{
    color:_Yellow,
    fontWeight:'500',
    fontSize:RFValue(12)
},
ratingText:{
    color:Black,
    fontSize:RFValue(12),
    fontWeight:'300',
    marginTop:RFValue(3)
},
reviesStyle:{
    color:Black,
    fontSize:RFValue(12),
    fontWeight:'bold',
},
buttonView:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:RFValue(10)
},
aboutTutor:{
    color:_Yellow,
    fontWeight:"500",
    fontSize:RFValue(14),
    marginTop:RFValue(10)
},
description:{
    color:Black,
    fontWeight:"300",
    fontSize:RFValue(13),
    marginTop:RFValue(10)
},
TeachesCard:{
    backgroundColor:_Yellow,
    width:'60%',
    marginTop:RFValue(10),
    paddingVertical:RFValue(10),
    paddingHorizontal:RFValue(15)
},
circle:{
    width:50,
    height:50, 
    borderRadius:50/2,
    backgroundColor:White,
    justifyContent:'center',
    alignItems:'center'
},
ENtext:{
    color:_Yellow,
    fontWeight:"700",
    fontSize:RFValue(16),
},
speaksText:{
fontSize:RFValue(14),
fontWeight:'600',
marginTop:3,
color:Black,    
},
moreabout:{
    marginTop:RFValue(10),
    color:_Yellow,
    marginHorizontal:RFValue(15)
}

})