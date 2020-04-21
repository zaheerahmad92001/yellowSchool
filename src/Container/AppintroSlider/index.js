import React,{Component} from 'react';
import { StyleSheet ,View,Text,Image,Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import _Navigation from '../../Navigation';
import Account from '../Account';
import { White, _Yellow, Black } from '../../Colors';
import styles from './styles'
import _Button from '../../Component/_Button';
import { RFValue } from 'react-native-responsive-fontsize';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const slides = [
    {
      key: 1,
      title: 'Prepare to speak confidently',
      text1: 'Take personalized lesson with expert',
      text2:'tutors and native speakers',
      account:'Have an account ? login',
      buttonText:'Get started',
      navigateTo:'',
      // image: require('./assets/1.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Learn with the best online tutors',
      text1: 'View tutors videos ,profiles and reviews',
      text2:'to chose the perfect tutor',
      account:'Have an account ? login',
      buttonText:'Get started',
      navigateTo:'',
      //image: require('./assets/2.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Stay connected',
      text1: 'Message tutors and get',
      text2:'notifications about your lessons',
      account:'Have an account ? login',
      buttonText:'Get started',
      navigateTo:'',
      //image: require('./assets/3.jpg'),
      backgroundColor: '#22bcb5',
    }
  ];
export default class _AppInfo extends Component{
    constructor(props){
        super(props);
    this.state={
        showRealApp: false
    }
    }
    _renderItem = ({ item }) => {
        return (
          <View style={{backgroundColor:White,flex:1}}>
              <View style={{flex:6,backgroundColor:White}}>
              {/* <Text style={styles.heading}>{item.title}</Text> */}
              </View>

              <View style={styles.contentView}>
              <View style={styles.content}>
              <Text style={styles.heading}>{item.title}</Text>
              <Image source={item.image} />
              {/* < Text style={styles.description}>{item.text}</Text> */}
        <Text style={styles.description}>{item.text1}</Text>
        <Text style={[styles.description,{marginTop:RFValue(3)}]}>{item.text2}</Text>
               </View>
           <View style={{marginVertical:RFValue(25),justifyContent:'center',alignItems:'center'}}>
             <_Button
             //onPress={()=>this.navigation(item.navigateTo)}
             styles={{backgroundColor:White, width:screenWidth*0.75,justifyContent:'center',alignItems:'center'}}
             textStyle={{color:_Yellow,}}
             textButton={item.buttonText}
             />
           </View>
        <Text style={[styles.account]}>{item.account}</Text>
            </View>
          </View>
        );
      } 
      _onDone = () => {
        this.setState({ showRealApp: true });
      }
      _dotstyle=()=>{
          <View>
              <Text>ala</Text>
          </View>
      }
      render(){
        if (this.state.showRealApp) {
            return <Account/>;
          } else {
            return <AppIntroSlider renderItem={this._renderItem}
             data={slides} 
             onDone={this._onDone}
             bottomButton={false}
             doneLabel={'Get started'}
             nextLabel={''}
              dotStyle={{
                  justifyContent:'center',
                  alignItems:'center',
                  backgroundColor:'white',
                  //marginBottom:200
              }}
             />;
          }
      }
}