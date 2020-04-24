import React ,{Component}from 'react';
import {View,Text,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './styles';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export default class TomorrowSlots extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    _click=()=>{
        alert('click')
    }
    render(){
        return(
       <View style={{height:screenHeight,width:screenWidth,marginTop:RFValue(5)}}>
        { this.state.slotsAvailable ?
           <View></View>:

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