import React, { Component } from 'react';
import { StyleSheet ,Dimensions} from 'react-native';
import { White, _Yellow, Black} from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const {height:screenHeight,width:screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: White
    },
    header: {
        width: screenWidth,
        height: screenHeight * 0.10,
        backgroundColor: _Yellow,
        borderBottomLeftRadius: RFValue(32),
        borderBottomRightRadius: RFValue(32),
    },
    inputView:{
       // marginTop:RFValue(20),
        justifyContent:'center',
        flex:0.6,
        marginHorizontal:RFValue(5)
    },
    content:{
        flex:8.5,
        marginTop:RFValue(10)
    },
    filters:{
        backgroundColor:_Yellow,
        alignItems:'center',
        position:"absolute",
        justifyContent:'space-around',
        alignSelf:'center',
        flexDirection:'row',
        borderRadius:RFValue(20),
        bottom:RFValue(15),
        width:RFValue(100),
        height:RFValue(40),
        paddingVertical:RFValue(10)
    },
    filterText:{
        color:Black,
        fontSize:RFValue(12),
        fontWeight:'500',
    }
})