import React ,{Component}from 'react';
import {View,Text,Dimensions ,FlatList, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './styles';
import { convertDateToString } from '../../RandomFun';
import { connect } from 'react-redux';
import _TimeZone from '../../Component/TimeZone';
import { _Yellow } from '../../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

class TomorrowSlots extends Component{
    constructor(props){
        super(props)
        const {item } = this.props
        this.state={
            tutorId : item.tutorId,
            tomorrow:item.tomorrow,
            mapOnce:true,
            tomorrowAvailability:[],
            availability:[],
            loading:false
        }
    }
   

    componentDidMount(){
        const {tutorId,today} = this.state
       this.setState({loading:true})
        let req = {
            method: 'GET',
            headers: {
              'Accept': 'application/json,text/plain',
              'Content-Type': 'application/json',
              'authorization': this.props.user.token
            },
          }
          fetch(`https://yellow-school.herokuapp.com/api/tutors/getAvailabilty/${tutorId}`, req).then((response) => response.json())
          .then((res) => {
            if (res.success) {
              this.setState({
                availability:res.data.availabilty,
                loading: false
              })
            } else {
              console.log('error ')
            }
    
          }).catch((error) => {
            console.log('error occure', error)
          })

    }
    _onPress=()=>{
        this.props.navigation.navigate('CheckOut')
       }
       
    renderTime=({item})=>{
        console.log('time zone ',item)
        return(
            <_TimeZone
            item={item}
            _onPress={this._onPress}
            />
        )
    }
    render(){
        const {tutorId,tomorrow ,availability ,mapOnce,tomorrowAvailability ,loading} = this.state

        {mapOnce ?
            availability.map((value)=>{
                let availableDay = convertDateToString(new Date(value.day))
                let _tomorrrowww  = convertDateToString(new Date(tomorrow))
                //console.log('value in map ',_tomorrrowww,'available day',availableDay)
                if(_tomorrrowww===availableDay){
             this.state.tomorrowAvailability.push(
                 value   
             )
            }
             this.setState({mapOnce:false})
            }):null
        }
        return(
       <View style={{height:screenHeight,width:screenWidth,marginTop:RFValue(5)}}>
        { loading ?
        <ActivityIndicator
        color={_Yellow}
        size={'large'}
        /> :
         tomorrowAvailability.length>0 ?
         <View style={styles.contentView}>
         <Text style={styles.localTime}>
            {'Your local time zone'}
         </Text>
         <FlatList
         style={{marginTop:RFValue(10)}}
         data={tomorrowAvailability}
         keyExtractor={(item)=>{(item.id)}}
         renderItem={this.renderTime}
         showsVerticalScrollIndicator={false}
         numColumns={2}
         />
       </View> 
           :

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
const mapStateToProps = (state) => {
    return {
      user: state.user.UserInfo
    }
  }
  
export default connect(mapStateToProps)(TomorrowSlots)