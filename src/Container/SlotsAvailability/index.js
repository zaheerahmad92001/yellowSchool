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
import { convertDateToString } from '../../RandomFun';

        let currentDate  = new Date()
        let today = convertDateToString(currentDate)
      
        let tomorrow = currentDate.setDate(currentDate.getDate()+1) 
         tomorrow= convertDateToString (new Date(tomorrow))
    
         let specDay1 = currentDate.setDate(currentDate.getDate()+1) 
         specDay1= convertDateToString (new Date(specDay1))
    
         let specDay2 = currentDate.setDate(currentDate.getDate()+1) 
         specDay2= convertDateToString (new Date(specDay2))
        
        //  console.log('current day',today,'tomorrow',tomorrow,'day 1',specDay1,'day 2',specDay2)  

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

componentDidMount(){
    

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
        let currentDate  = new Date()
        let specificDay1 = currentDate.setDate(currentDate.getDate()+2) 
        specificDay1 = new Date(specificDay1).toString()
        specificDay1 = specificDay1.slice(0,10)

        let newCurrentDate = new Date()
        let specificDay2  = newCurrentDate.setDate(newCurrentDate.getDate()+3)
        specificDay2 = new Date(specificDay2).toString()
        specificDay2 = specificDay2.slice(0,10)

        let tutorId = this.props.navigation.getParam('tutorId')

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
                  thirdButtonHeading={specificDay1}
                  forthButtonHeading={specificDay2}
                  />
                  <View style={[styles.bottomBorder,{marginTop:RFValue(10)}]}></View>
                 
                 { this.state.todayClicked ?
                 <TodaySlots
                 navigation={this.props.navigation}
                 item={{
                     today,
                    tutorId
                }}
                 /> :
                 this.state.tomorrowClicked ?
                 <TomorrowSlots
                 navigation={this.props.navigation}
                 item={{
                    tomorrow,
                   tutorId
               }}
                 />:
                 this.state.Day1Clicked ?
                 <SpecificDayOneSlots
                 navigation={this.props.navigation}
                 item={{
                   specDay1,
                   tutorId
               }}
                 />:
                 this.state.Day2Clicked ?
                 <SpecificDayTwoSlots
                 navigation={this.props.navigation}
                 item={{
                    specDay2,
                    tutorId
                }}
                 />:null
                 }
                
{/* <View style={styles.noSlotAvailable}>
    <Text>NO 1 hour slots time available </Text>
</View> */}

                </ScrollView>
            </SafeAreaView>
        )
    }
}