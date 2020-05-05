import{StyleSheet}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Black ,BorderBottom, _Yellow} from '../../Colors';

export default StyleSheet.create({
   container:{
       flex:1
   },
   innerView:{
       marginHorizontal:RFValue(20),
       marginTop:RFValue(10)
   },
   _textStyle:{
       color:Black,
       fontSize:RFValue(14),
       fontWeight:'500',
       fontStyle:'normal'
   },
   searchView:{
       flexDirection:'row',
       marginTop:RFValue(20),
       alignItems:'center',
       justifyContent:'center'
   },
   bottomBorder:{  
    marginTop:RFValue(5),    
    width:'100%',
    borderBottomColor:_Yellow,
    borderBottomWidth:1
}
})