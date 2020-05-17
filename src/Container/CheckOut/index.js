import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image, SafeAreaView } from 'react-native';
import styles from './styles'
import _AppHeader from '../../Component/AppHeader';
import { White, _Yellow, lightGrey, lightGreen, lightYellow } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Card, CardItem, Left, Thumbnail, Icon } from 'native-base';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _Button from '../../Component/_Button';

export default class CheckOut extends Component {
    constructor(props) {
        super(props)
        this.state = {
            throughCard: true,
            throughPayPal: false,
            freeLesson: true,
        }
    }
    goBack = () => {
     this.props.navigation.pop()
    }
    _cardsClicked = () => {
        this.setState({
            throughCard: true,
            throughPayPal: false
        })
    }
    _PayPalClicked = () => {
        this.setState({
            throughCard: false,
            throughPayPal: true
        })
    }
    _freeLesson = (action) => {
        this.setState({
            freeLesson: action
        })
    }
    _Continue = () => {
    this.props.navigation.navigate('Payment')
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView style={{ height: screenHeight, paddingTop: RFValue(60), backgroundColor: _Yellow, }}>
                    <View style={styles.mainView}>
                        <View style={styles.tutorProfile}>
                            <View style={{ flex: 2, }}>
                                <Thumbnail circular
                                    source={require('../../Assets/download.jpeg')}
                                />
                                <View style={styles.ratingView}>
                                    <Icon
                                        name={'star-border'}
                                        type={'MaterialIcons'}
                                        style={{ fontSize: RFValue(14), color: _Yellow, marginTop: RFValue(1) }}
                                    />
                                    <Text style={styles.reviewCount} >4.9</Text>
                                </View>
                            </View>
                            <View style={{ flex: 8, }}>
                                <View style={styles.NameView}>
                                    <Text style={styles.nameStyle}>Kenneth J.</Text>
                                    <Image
                                        style={styles.nationalFlag}
                                        source={require('../../Assets/nationalflag.png')}
                                    />
                                </View>
                                <View style={styles.NameView}>
                                    <Icon
                                        name={'graduation-cap'}
                                        type={'Entypo'}
                                        style={{ fontSize: RFValue(16), color: lightGrey, marginRight: RFValue(5), marginTop: RFValue(2) }}
                                    />
                                    <Text style={[styles.nameStyle, { color: lightGrey }]}>English language</Text>
                                </View>
                            </View>

                        </View>
                        <View style={styles.bottomBorder}></View>

                        <View style={styles.dateTimeView}>
                            <Text style={styles.dateTime}>Date and time</Text>
                            <Text style={styles.day}>Friday,13 March, 19:30 </Text>
                            <Text style={styles.dateTime}>GMT +05:00</Text>
                        </View>
                        <View style={[styles.bottomBorder, { marginTop: RFValue(15) }]}></View>
                        <View style={styles.servicesDetailOuter}>
                            <View style={styles.servicesDetailInner}>
                                <Text style={styles.dateTime}>Services detail</Text>
                                <Text style={styles.dateTime}>Price per hour</Text>
                            </View>
                            <View style={styles.servicesDetailInner}>
                                <Text style={styles.oneHourlesson}>1 hour lesson</Text>
                                <Text style={styles.Price}>$20.00</Text>
                            </View>
                            <View style={styles.servicesDetailInner}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.oneHourlesson}>Transaction fee</Text>
                                    <Icon
                                        name={'question'}
                                        type={'EvilIcons'}
                                        style={{ color: lightGrey, fontSize: RFValue(16) }}
                                    />
                                </View>
                                <Text style={styles.Price}>$0.30</Text>
                            </View>
                            <View style={styles.servicesDetailInner}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.oneHourlesson}>Lesson collection fee</Text>
                                    <Icon
                                        name={'question'}
                                        type={'EvilIcons'}
                                        style={{ color: lightGrey, fontSize: RFValue(16) }}
                                    />
                                </View>
                                <Text style={[styles.Price, { color: lightGreen }]}>Free</Text>
                            </View>
                            <View style={[styles.bottomBorder, { marginTop: RFValue(15) }]}></View>
                            <View style={styles.totalText}>
                                <Text style={[styles.oneHourlesson, { fontWeight: 'bold' }]}>Total</Text>
                                <Text style={[styles.oneHourlesson, { fontWeight: 'bold' }]}>$20.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.mainView, { marginTop: RFValue(10) }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Thumbnail small circular
                                    source={require('../../Assets/download.jpeg')}
                                />
                                <Text style={[styles.nameStyle, { marginLeft: RFValue(7) }]}>Piret</Text>
                            </View>
                            <View style={styles.totlaRatingView}>
                                <Icon
                                    name={'star-border'}
                                    type={'MaterialIcons'}
                                    style={{ fontSize: RFValue(14), color: _Yellow, marginTop: RFValue(1) }}
                                />
                                <Text style={styles.reviewCount}>5.0</Text>
                            </View>
                        </View>
                        <Text style={[styles.oneHourlesson, { marginTop: RFValue(5) }]}>Mehr T. is really perofessional and experienced languagen trainer . i really appreciate her work methods </Text>
                    </View>
                    <View style={[styles.mainView, { marginTop: RFValue(10) }]}>
                        <Text style={styles.secureCheckOut}>Secure checkout</Text>
                        <View style={[styles.bottomBorder, { marginTop: RFValue(20), borderBottomWidth: 0.4 }]}></View>
                        <Text style={styles.paymetnMethod}>Payment methods </Text>
                        <View style={styles.paymetnmentIns}>
                            <Icon
                                name={'md-unlock'}
                                type={'Ionicons'}
                                style={{ fontSize: RFValue(16), color: lightGreen, marginRight: RFValue(3) }}
                            />
                            <Text style={styles.dateTime}>it`s safe to pay on preply. All transaction are protected by SSL encryption.</Text>
                        </View>

                        <TouchableOpacity
                            style={this.state.throughCard ? [styles.paymentWayOuter,{borderColor:_Yellow}]:[styles.paymentWayOuter]}
                            onPress={() => this._cardsClicked()}
                        >
                            <View style={styles.paymentWayInner}>
                                <View style={styles.MethodsView}>
                                    <Icon
                                        name={this.state.throughCard ? 'dot-circle-o' : 'circle-thin'}
                                        type={'FontAwesome'}
                                        style={this.state.throughCard ? [styles.circleIcon] : [styles.circleIcon, { color: lightGrey }]}
                                    />
                                    <Thumbnail square small
                                        style={{ marginLeft: RFValue(10) }}
                                        source={require('../../Assets/visacard.jpeg')}
                                    />
                                    <Thumbnail square small
                                        style={{ marginLeft: RFValue(5) }}
                                        source={require('../../Assets/mastercard.jpeg')}
                                    />
                                    <Thumbnail square small
                                        style={{ marginLeft: RFValue(5) }}
                                        source={require('../../Assets/amax.png')}
                                    />
                                    <Thumbnail square small
                                        style={{ marginLeft: RFValue(5) }}
                                        source={require('../../Assets/discover.png')}
                                    />
                                </View>
                                <Icon
                                    name={'md-unlock'}
                                    type={'Ionicons'}
                                    style={{ fontSize: RFValue(16), color: lightGrey, marginRight: RFValue(3) }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.throughPayPal ?[styles.paymentWayOuter,{borderColor:_Yellow}]:[styles.paymentWayOuter]}
                            onPress={() => this._PayPalClicked()}
                        >
                            <View style={styles.paymentWayInner}>
                                <View style={styles.MethodsView}>
                                    <Icon
                                        name={this.state.throughPayPal ? 'dot-circle-o' : 'circle-thin'}
                                        type={'FontAwesome'}
                                        style={this.state.throughPayPal ? [styles.circleIcon] : [styles.circleIcon, { color: lightGrey }]}
                                    />
                                    <Thumbnail square small
                                        style={{ marginLeft: RFValue(10) }}
                                        source={require('../../Assets/paypal.png')}
                                    />
                                </View>
                                <Icon
                                    name={'md-unlock'}
                                    type={'Ionicons'}
                                    style={{ fontSize: RFValue(16), color: lightGrey, marginRight: RFValue(3) }}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.freelessonText]}>
                            {this.state.freeLesson ?
                                <Icon
                                    name={'ios-checkbox-outline'}
                                    type={'Ionicons'}
                                    style={[styles.circleIcon]}
                                    onPress={() => this._freeLesson(!this.state.freeLesson)}
                                /> :
                                <Icon
                                    name={'checkbox-blank-outline'}
                                    type={'MaterialCommunityIcons'}
                                    style={[styles.circleIcon, { color: lightGrey }]}
                                    onPress={() => this._freeLesson(!this.state.freeLesson)}
                                />
                            }
                            <Text style={[styles.freeLesson]}>i want <Text style={{ color: _Yellow, backgroundColor: lightYellow }}>free lesson</Text> or a refund if tutor doesn`t meet my needs</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFValue(15) }}>
                            <_Button
                                styles={{ height: screenHeight * 0.07 }}
                                textButton={'Continue'}
                                onPress={() => this._Continue()}
                            />
                        </View>
                        <View style={[styles.bottomBorder, { marginTop: RFValue(20), borderBottomWidth: 0.5 }]}></View>
                        <View style={styles.guaranteeView}>
                            <View style={{ flex: 1, alignItems: 'flex-start', }}>
                                <Icon
                                    name={'alert-decagram-outline'}
                                    type={'MaterialCommunityIcons'}
                                    style={{ fontSize: RFValue(20), color: _Yellow }}
                                />
                            </View>
                            <View style={styles.guaranteeText}>
                                <Text style={[styles.reviewCount, { fontSize: RFValue(14) }]}>Learn wiht 100% satisfication guarantee</Text>
                                <Text style={[styles.dateTime]}>if your lesson does not take place, or you are not satisfied with the tutor
                                we will provide you with a free replacement to another tutor of your choice or offer you a full refund.
                              </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.privacyContent}>
                        <View style={styles.privacyInnerView}>
                            <Icon
                                name={'md-unlock'}
                                type={'Ionicons'}
                                style={{ fontSize: RFValue(16), color: White, marginRight: RFValue(3) }}
                            />
                            <Text style={[styles.dateTime, { color: White, marginLeft: RFValue(5) }]}>
                                Payment details are encrypted and securely processed by our provider-Braintree.paypal
                                </Text>

                        </View>
                        <View style={styles.copyRightView}>
                            <Icon
                                name={'copyright'}
                                type={'AntDesign'}
                                style={{ fontSize: RFValue(16), color: White }}
                            />
                        <Text style={[styles.dateTime, { color: White, marginLeft: RFValue(5) }]}>2012-2020 Preply Inc</Text>

                        </View>
                        <View style={styles.copyRightView}>
                          <Text style={[styles.termsOfService]}>Terms of services</Text>
                          <Text style={[styles.termsOfService,{marginLeft:RFValue(7)}]}>Privacy Policy</Text>
                        </View>
                        <View style={styles.copyRightView}>
                          <Text style={[styles.termsOfService]}>Cookies Policy</Text>
                          <Text style={[styles.termsOfService,{marginLeft:RFValue(7)}]}>Refund Policy</Text>
                        </View>
                    </View>

                </ScrollView>

                <_AppHeader
                    styles={{ position: 'absolute', backgroundColor: 'none' }}
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{ color: White }}
                    leftText={'Back'}
                    headerText={'Check out'}
                    leftPress={() => this.goBack()}
                />

            </SafeAreaView>
        )
    }
}