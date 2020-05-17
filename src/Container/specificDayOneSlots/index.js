import React ,{Component}from 'react';
import {View,Text,Dimensions, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './styles';
import { _Yellow, lightYellow } from '../../Colors';
import _TimeZone from '../../Component/TimeZone';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const time=[
    {time:'19:00'},
    {time:'21:00'},
    {time:'17:00'},
]
export default class SpecificDayOneSlots extends Component{
    constructor(props){
        super(props)
        this.state={
            slotsAvailable:true
        }
    }
    _onPress=()=>{
     this.props.navigation.navigate('CheckOut')
    }
   renderTime=({item})=>{
       return(
           <_TimeZone
           item={item}
           _onPress={this._onPress}
           />
       )
   }
    render(){
        return(
       <View style={{height:screenHeight,width:screenWidth,marginTop:RFValue(5)}}>
        { this.state.slotsAvailable ?
           <View style={styles.contentView}>
             <Text style={styles.localTime}>
                {'Your local time zone'}
             </Text>
             <FlatList
             style={{marginTop:RFValue(10)}}
             data={time}
             keyExtractor={(item)=>{(item.id)}}
             renderItem={this.renderTime}
             showsVerticalScrollIndicator={false}
             numColumns={2}
             />
           </View>:

        <View>
        <View style={{height:screenHeight*0.35}}></View>
        <View>
            <Text style={styles.oneHourSlot} >No 1 hour time slot available</Text>
            <Text style={styles.oneHourSlot} >Switch for available time on other days</Text>
        </View>
        </View>

        }
       </View>
        )
    }
}