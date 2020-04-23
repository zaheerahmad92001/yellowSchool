import React ,{Component}from 'react';
import {View ,Text}from 'react-native';
import styles from './styles'
import _AppHeader from '../../Component/AppHeader';
import { White } from '../../Colors';
import { CardItem, Thumbnail } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import _HorizontalButton from '../../Component/HorizontalButton';
import TodaySlots from '../../TodaySlots';
import TomorrowSlots from '../../TomorrowSlots';
import SpecificDayOneSlots from '../../specificDayOneSlots';
import SpecificDayTwoSlots from '../../specificDayTwoSlots';

export default class SlotsAvailable extends Component{
    constructor(props){
        super(props)
        this.state={
            todayClicked:false,
            tomorrowClicked:false,
            Day1Clicked:false,
            Day2Clicked:false,
        }
    }
    goBack =()=>{

    }
    todayAvailability=()=>{
        this.setState({
            todayClicked:true,
            tomorrowClicked:false,
            Day1Clicked:false,
            Day2Clicked:false,
        })
    }
    tomorrowAvailability=()=>{
        this.setState({
            todayClicked:false,
            tomorrowClicked:true,
            Day1Clicked:false,
            Day2Clicked:false,
        })
    }
    specificDay1Availability=()=>{
        this.setState({
            todayClicked:false,
            tomorrowClicked:false,
            Day1Clicked:true,
            Day2Clicked:false,
        }) 
    }
    specificDay2Availability=()=>{
        this.setState({
            todayClicked:false,
            tomorrowClicked:false,
            Day1Clicked:false,
            Day2Clicked:true,
        }) 
    }
    render(){
        return(
            <View style={styles.container}>
             <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{color:White}}
                    leftText={'Back'}
                    leftPress={()=>this.goBack()}
                />
                <ScrollView style={{flex:1,marginHorizontal:RFValue(20),marginTop:RFValue(10)}}>
                  <View style={{flexDirection:'row'}}>
                     <View style={{flex:8,justifyContent:"center",}}>
                         <Text style={styles.lessonTime}>1 hour lesson</Text>
                         <Text style={styles.timeBelow}>select a time below</Text>
                     </View>
                     <View style={{flex:2,alignItems:'center'}}>
                       <Thumbnail small circular 
                       style={{alignSelf:'center',}}
                       source={require('../../Assets/ayezakhan.jpeg')}
                       />
                     </View>
                  </View>
                  <View style={styles.bottomBorder}></View>
                  <_HorizontalButton
                  todayClick={()=>this.todayAvailability()}
                  tomorrowClick={()=>this.tomorrowAvailability()}
                  Day1Click={()=>this.specificDay1Availability()}
                  Day2Click={()=>this.specificDay2Availability()}
                  todayClicked={this.state.todayClicked}
                  tomorrowClicked={this.state.tomorrowClicked}
                  Day1Clicked={this.state.Day1Clicked}
                  Day2Clicked={this.state.Day2Clicked}
                  today={'Today'}
                  tomorrow={'Tomorrow'}
                  specificDay1={'Fri,Mar 13'}
                  specificDay2={'Sat,Mar 13'}
                  />
                  <View style={styles.bottomBorder}></View>
                 
                 { this.state.todayClicked ?
                 <TodaySlots
                 /> :
                 this.state.tomorrowClicked ?
                 <TomorrowSlots/>:
                 this.state.Day1Clicked ?
                 <SpecificDayOneSlots/>:
                 this.state.Day2Clicked ?
                 <SpecificDayTwoSlots/>:null
                 }
                
{/* <View style={styles.noSlotAvailable}>
    <Text>NO 1 hour slots time available </Text>
</View> */}

                </ScrollView>
            </View>
        )
    }
}