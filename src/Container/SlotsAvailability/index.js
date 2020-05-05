import React ,{Component}from 'react';
import {View ,Text, SafeAreaView}from 'react-native';
import styles from './styles'
import _AppHeader from '../../Component/AppHeader';
import { White } from '../../Colors';
import { CardItem, Thumbnail } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import _HorizontalButton from '../../Component/HorizontalButton';
import TodaySlots from '../TodaySlots';
import TomorrowSlots from '../TomorrowSlots';
import SpecificDayOneSlots from '../specificDayOneSlots';
import SpecificDayTwoSlots from '../specificDayTwoSlots';

export default class SlotsAvailable extends Component{
    constructor(props){
        super(props)
        this.state={
            todayClicked:true,
            tomorrowClicked:false,
            Day1Clicked:false,
            Day2Clicked:false,
        }
    }
    goBack =()=>{
this.props.navigation.pop()
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
            <SafeAreaView style={styles.container}>
             <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{color:White}}
                    leftText={'Back'}
                    leftIconPress={()=>this.goBack()}
                    leftPress={()=>this.goBack()}
                />
                <ScrollView style={{flex:1,marginHorizontal:RFValue(20),marginTop:RFValue(10)}}
                showsVerticalScrollIndicator={false}
                >
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
                  from={'slotAvailablity'}
                  firstButtonPress={()=>this.todayAvailability()}
                  secondButtonPress={()=>this.tomorrowAvailability()}
                  thirdButtonPress={()=>this.specificDay1Availability()}
                  forthButtonPress={()=>this.specificDay2Availability()}
                  firstButtonClicked={this.state.todayClicked}
                  secondButtonClicked={this.state.tomorrowClicked}
                  thirdButtonClicked={this.state.Day1Clicked}
                  forthButtonClicked={this.state.Day2Clicked}
                  firstButtonHeading={'Today'}
                  secondButtonHeading={'Tomorrow'}
                  thirdButtonHeading={'Fri,Mar 13'}
                  forthButtonHeading={'Sat,Mar 13'}
                  />
                  <View style={[styles.bottomBorder,{marginTop:RFValue(10)}]}></View>
                 
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
            </SafeAreaView>
        )
    }
}