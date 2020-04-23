import React, { Component } from 'react';
import {
    View,
    Text,
    Image, Dimensions,
    FlatList,
} from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { White, _Yellow, Black, lightGrey } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Thumbnail, Icon } from 'native-base';
import _Button from '../../Component/_Button';
import _Reviews from '../../Component/reviews';
import _BottomStaticButton from '../../Component/bottomStaticButton';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const reviews=[
    {name:'Priet',reviewDate:'2020 Mar-7',message:'Mehr is really professional and experienced trainer i really appreciate her work method'},
    {name:'Priet',reviewDate:'2020 Mar-7',message:'Mehr is really professional and experienced trainer i really appreciate her work method'},
    {name:'Priet',reviewDate:'2020 Mar-7',message:'Mehr is really professional and experienced trainer i really appreciate her work method'}
]
export default class SingleTutor extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    goBack = () => {
        this.props.navigation.navigate('Login')
    }
    _SendMessage=()=>{
        
    }
    renderReviews=({item,index})=>{
        return(
            <_Reviews
            item={item}
            index={index}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: screenHeight * 0.41 }}>
                    <Image
                        style={{ width: '100%', height: screenHeight * 0.4, backgroundColor: 'red' }}
                        source={require('../../Assets/office.jpg')}
                    />
                </View>
                <_AppHeader
                    styles={{ position: 'absolute', }}
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{ color: White }}
                    headerText={'Mehr T.'}
                    leftIconPress={() => this.goBack()}
                />


                <ScrollView 
                showsVerticalScrollIndicator={false}
                > 
                    <View style={styles.tutorInfo}>
                        <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <Thumbnail circular
                                source={require('../../Assets/office.jpg')}
                            />
                        </View>
                        <View style={{ flex: 8, }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.Nametext}>Mehr T.</Text>
                                <Thumbnail small square
                                    style={styles.nationalFlag}
                                    source={require('../../Assets/nationalflag.png')}
                                />
                            </View>
                            <Text style={styles.tutorExperience}>Certified IELTS and TOEFI tutor with 6 years of experience</Text>
                            <View style={{ flexDirection: 'row', marginTop: RFValue(3) }}>
                                <Icon
                                    name={'verified-user'}
                                    type={'MaterialIcons'}
                                    style={{ fontSize: RFValue(20), color: _Yellow }}
                                />
                                <Text style={styles.Verified}>Verified</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.bottomBorder}></View>
                   
                        <View style={styles.userStatics}>
                            <View style={styles.ratingView}>
                                <View style={{flexDirection:'row'}}>
                                <Text style={styles.ratingStyle}>4.9</Text>
                                <Icon
                                 name={'star-border'}
                                 type={'MaterialIcons'}
                                 style={{ fontSize: RFValue(14), color: _Yellow, marginTop: RFValue(0) }}
                                />
                                </View>
                                <Text style={styles.ratingText}>rating</Text>
                            </View>
                            <View style={styles.ratingView}>
                            <Text style={styles.reviesStyle}>61</Text>
                            <Text style={styles.ratingText} >reviews</Text>
                            </View>
                            <View style={styles.ratingView}>
                            <Text style={styles.reviesStyle}>300</Text>
                            <Text style={styles.ratingText}>lessons</Text>
                            </View>
                            <View style={styles.ratingView}>
                            <Text style={styles.reviesStyle}>6 Yr</Text>  
                            <Text style={styles.ratingText} >experience</Text>
                            </View>
                        </View>
                    <View style={styles.buttonView}>
                  <_Button
                  styles={{width:screenWidth, height: screenHeight * 0.07,borderRadius:0,}}
                  IconNmae={'message-circle'}
                  type={'Feather'}
                  iconStyles={{color:White,fontSize:RFValue(20)}}
                  textButton={'Send message'}
                  onPress={()=>{this._SendMessage()}}
                  />
                    </View>
                    <View style={{marginHorizontal:RFValue(14)}}>
                <Text style={styles.aboutTutor}>About Mehr T.</Text>
                <Text style={styles.description}>Hi !</Text>
                <Text style={styles.description}>My name is Sara and i am Hungarian with a Native English language- l lived and studies in scotland
                    University of Glasgow for four years and one year in canda </Text>
                    <Text style={styles.description}>My name is Sara and i am Hungarian with a Native English language- l lived and studies in scotland
                    University of Glasgow for four years and one year in canda </Text>
                    <Text style={styles.description}>My name is Sara and i am Hungarian with a Native English language- l lived and studies in scotland
                    University of Glasgow for four years and one year in canda </Text>
                    <Text style={styles.description}>My name is Sara and i am Hungarian with a Native English language- l lived and studies in scotland
                    University of Glasgow for four years and one year in canda </Text>

                    <View style={[styles.bottomBorder,{marginTop:RFValue(20)}]}></View>    

                 <Text style={[styles.description,{fontSize:RFValue(14),fontWeight:'600'}]}>Teaches</Text>
                 <View style={styles.TeachesCard}>
                    <View style={styles.circle}>
                       <Text style={styles.ENtext}>EN</Text>
                    </View>
                    <Text style={[styles.aboutTutor,{color:White,fontSize:RFValue(18)}]}>English language</Text>
                 </View>
                 <View style={[styles.bottomBorder,{marginTop:RFValue(20)}]}></View>  

                 <Text style={[styles.description,{fontSize:RFValue(14),fontWeight:'600'}]}>Speaks</Text>
                 <Text style={[styles.speaksText]}>English (Native)</Text>
                 <View style={[styles.bottomBorder,{marginTop:RFValue(20),borderBottomWidth:RFValue(5)}]}></View>
                 <View style={{flexDirection:'row'}}>
                    <Text style={[styles.ratingStyle,{marginTop:RFValue(10),fontSize:RFValue(14)}]}>4.9</Text>
                      <Icon
                        name={'star-border'}
                        type={'MaterialIcons'}
                        style={{ fontSize: RFValue(16), color: _Yellow, marginTop: RFValue(10) }}
                    />
                    <Text style={[styles.reviesStyle,{marginTop:RFValue(10),fontSize:RFValue(14),marginLeft:RFValue(10)}]}>51</Text>
                    <Text style={[styles.ratingText,{marginTop:RFValue(8),fontSize:RFValue(14),marginLeft:RFValue(5),fontWeight:'600'}]} >reviews</Text>
                    </View>
                    </View>
                    <FlatList
                    extraData={reviews}
                    data={reviews}
                    keyExtractor={(item)=>{item.id}}
                    renderItem={this.renderReviews}
                    showsVerticalScrollIndicator={false}
                    />
                <TouchableOpacity style={{marginTop:RFValue(8)}}>
                  <View style={{flexDirection:'row',marginHorizontal:RFValue(15),justifyContent:'space-between'}}>
                   <Text style={{fontSize:RFValue(16),fontWeight:'500',color:_Yellow}}>Read more 51 reviews</Text>
                   <Icon
                   name={'ios-arrow-forward'}
                   type={'Ionicons'}
                   style={{color:_Yellow,fontSize:RFValue(20)}}
                   />
                  </View>
                </TouchableOpacity>

                <View style={[styles.bottomBorder,{marginTop:RFValue(20),borderBottomWidth:RFValue(5),width:'95%',alignSelf:'center'}]}></View>
               <View style={{marginHorizontal:RFValue(15)}}>
                <Text style={styles.aboutTutor}>More about Mehr T.</Text>
                <TouchableOpacity style={{marginTop:RFValue(12)}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:RFValue(14),fontWeight:'300',color:Black}}>Preferred studen age</Text>
                   <Icon
                   name={'ios-arrow-forward'}
                   type={'Ionicons'}
                   style={{color:_Yellow,fontSize:RFValue(20)}}
                   />
                  </View>
                </TouchableOpacity>
                <View style={[styles.bottomBorder,{marginTop:RFValue(14),marginBottom:RFValue(14), borderBottomColor:lightGrey, alignSelf:'center'}]}></View>
                <TouchableOpacity>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:RFValue(14),fontWeight:'300',color:Black}}>Preferred level of studen</Text>
                   <Icon
                   name={'ios-arrow-forward'}
                   type={'Ionicons'}
                   style={{color:_Yellow,fontSize:RFValue(20)}}
                   />
                  </View>
                </TouchableOpacity>
                <View style={[styles.bottomBorder,{marginTop:RFValue(14),marginBottom:RFValue(14), borderBottomColor:lightGrey, alignSelf:'center'}]}></View>
                <TouchableOpacity>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontSize:RFValue(14),fontWeight:'300',color:Black}}>Resume</Text>
                   <Icon
                   name={'ios-arrow-forward'}
                   type={'Ionicons'}
                   style={{color:_Yellow,fontSize:RFValue(20)}}
                   />
                  </View>
                </TouchableOpacity>
                <View style={[styles.bottomBorder,{marginTop:RFValue(14),marginBottom:RFValue(14), borderBottomColor:lightGrey, alignSelf:'center'}]}></View>
                </View>
                </ScrollView>
       <_BottomStaticButton/>


            </View>
        )
    }
}