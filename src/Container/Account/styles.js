import {StyleSheet}from 'react-native';
import { White, BorderBottom, Black, lightGrey, _Yellow } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:White,
        
    },
    content:{
        flex:9,
        marginTop:RFValue(10)    
    },
    contentSecond:{
        marginHorizontal:RFValue(20),
        marginTop:RFValue(20),
        flex:9,
    },
    settingStyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:BorderBottom,
        borderBottomWidth:0.5,
        marginTop:RFValue(15),
        marginBottom:RFValue(15)
    },
    Heading:{
        fontSize:RFValue(12),
        color:Black,
        fontWeight:'500'

    },
    versionText:{
        color:lightGrey,
        fontSize:RFValue(12),
        fontWeight:'500'
    },
    BottomNavigation:{
        flex:1.5,
        backgroundColor:_Yellow,
        borderTopRightRadius:RFValue(32),
        borderTopLeftRadius:RFValue(32),
        justifyContent:'center',
        
         
        
    }
})