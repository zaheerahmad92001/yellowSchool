import React,{Component}from 'react';
import{
    View,
    Text,
    Dimensions,
}from 'react-native';
import styles from './styles'
import _AppHeader from '../../Component/AppHeader';
import { White, Black, _Yellow, lightGrey } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Icon } from 'native-base';
import _Button from '../../Component/_Button';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class Account extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <_AppHeader
                styles={{backgroundColor:White,}}
                leftTextStyle={{color:Black, fontSize:RFValue(16),}}
                leftText={'Account'}
                />
               <View style={styles.content}>
                <View style={{flexDirection:'row'}}>
                <_Button
                styles={{width: screenWidth*0.35,}}
                textStyle={{fontSize:RFValue(12),color:Black}}
                IconNmae={'login'}
                textButton={'Login'}
                />
                <_Button
                styles={{width: screenWidth*0.35,}}
                textStyle={{fontSize:RFValue(12),color:Black}}
                IconNmae={'account'}
                textButton={'SignUp'}
                />
                </View>
                <View style={styles.contentSecond}>
                 <View style={styles.settingStyle}>
                  <Text style={styles.Heading}>Support center</Text>
                  <Icon
                  name={'questioncircleo'}
                  type={'AntDesign'}
                  style={{fontSize:RFValue(14),color:_Yellow}}
                  />
                 </View>
                 <View style={styles.bottomBorder}></View> 
                 <View style={styles.settingStyle}>
                  <Text style={styles.Heading}>Report problem</Text>
                  <Icon
                  name={'exclamation'}
                  type={'EvilIcons'}
                  style={{fontSize:RFValue(20),color:_Yellow}}
                  />
                 </View>
                 <View style={styles.bottomBorder}></View> 
                 <View style={styles.settingStyle}>
                  <Text style={styles.Heading}>Privacy policy</Text>
                  <Icon
                  name={'lock'}
                  type={'EvilIcons'}
                  style={{fontSize:RFValue(23),color:_Yellow}}
                  />
                 </View>
                 <View style={styles.bottomBorder}></View> 

                 <View style={styles.settingStyle}>
                  <Text style={styles.Heading}>Terms of service</Text>
                  <Icon
                  name={'file1'}
                  type={'AntDesign'}
                  style={{fontSize:RFValue(15),color:_Yellow}}
                  />
                 </View>
                 <View style={[styles.bottomBorder]}></View> 
                  <Text style={styles.versionText}>Version 13.9</Text>
                </View>
                <View style={styles.BottomNavigation}>
                   <View style={{flex:1.5, flexDirection:'row',justifyContent:'space-evenly',alignItems:"center"}}>
                       <Icon
                       name={'ios-search'}
                       type={'Ionicons'}
                       style={{fontSize:RFValue(22),color:'white'}}
                       />
                       <Icon/>
                       <Icon
                       name={'message-circle'}
                       type={'Feather'}
                       style={{fontSize:RFValue(22),color:'white'}}
                       />
                       <Icon/>
                       <Icon
                       name={'user'}
                       type={'Feather'}
                       style={{fontSize:RFValue(22),color:'white'}}
                       />
                       <Icon/>
                       <Icon
                       name={'settings'}
                       type={'Feather'}
                       style={{fontSize:RFValue(20),color:'white'}}
                       />
                       <Icon/>
                       </View>
                   
                </View>
               </View>
            </Container>
        )
    }
}