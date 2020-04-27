import React,{Component}from 'react';
import{
    View,
    Text,
    Dimensions,
}from 'react-native';
import styles from './styles';
import _TextInput from '../../Component/Input';
import _Button from '../../Component/_Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _HorizontalButton from '../../Component/HorizontalButton';
import { RFValue } from 'react-native-responsive-fontsize';
export default class PaymentHistory extends Component {
    constructor(props){
        super(props)
        this.state={
            dateClicked:false,
            hourClicked:false,
            subjectClicked:false,
            downloadClicked:true,
        }
    }
    dateButtonPress=()=>{
        this.setState({
            dateClicked:true,
            hourClicked:false,
            subjectClicked:false,
            downloadClicked:false,
        })
    }
    hourButtonPress=()=>{
        this.setState({
            dateClicked:false,
            hourClicked:true,
            subjectClicked:false,
            downloadClicked:false,
        })
    }
    subjectButtonPress=()=>{
        this.setState({
            dateClicked:false,
            hourClicked:false,
            subjectClicked:true,
            downloadClicked:false,
        })
    }
downloadButtonPress=()=>{
    this.setState({
        dateClicked:false,
        hourClicked:false,
        subjectClicked:false,
        downloadClicked:true,
    })
}
_FindTutor=()=>{
    
}
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.paymentHistory}>Payment history</Text>
            <View style={styles.bottomBorder}></View>
            <View style={styles.content}>
                <TouchableOpacity style={{width:'60%'}}>
                    <Text style={styles.billingInfo}>Update blling info</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomBorder}></View>
            <_HorizontalButton
                  from={'slotAvailablity'}
                  firstButtonPress={()=>this.dateButtonPress()}
                  secondButtonPress={()=>this.hourButtonPress()}
                  thirdButtonPress={()=>this.subjectButtonPress()}
                  forthButtonPress={()=>this.downloadButtonPress()}
                  firstButtonClicked={this.state.dateClicked}
                  secondButtonClicked={this.state.hourClicked}
                  thirdButtonClicked={this.state.subjectClicked}
                  forthButtonClicked={this.state.downloadClicked}
                  firstButtonHeading={'DATE'}
                  secondButtonHeading={'HOUR'}
                  thirdButtonHeading={'SUBJECT'}
                  forthButtonHeading={'DOWNLOAD ALL'}
                  />
             <View style={[styles.bottomBorder,{marginTop:RFValue(10)}]}></View>
             <View style={styles.findFirsTutor}>
              <TouchableOpacity 
              onPress={()=>this._FindTutor()}
              >
                  <Text style={styles.billingInfo}>Find your first tutor</Text>
              </TouchableOpacity>
             </View>
             <View style={[styles.bottomBorder,{marginTop:RFValue(15)}]}></View>
            </View>
        )
    }
}