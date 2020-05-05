import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Platform
} from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { RFValue } from 'react-native-responsive-fontsize';
import NumberFormat from 'react-number-format';
import { Red, White, darkGray, lightGrey, _Yellow } from '../../Colors';
import _TextInput from '../../Component/Input';
import _AppHeader from '../../Component/AppHeader';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import styles from './styles';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import _Button from '../../Component/_Button';
import TextInputMask from 'react-native-text-input-mask';

export default class Payement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expiry: '',
            cardNumber: '',
            cvv: "",
            saveCard:true,
        }
    }
    // _onChange = (form) =>{ 
    //     console.log('cvc' ,form.values)
    //     console.log('valid' ,form.valid)
    // }
    goBack = () => {
        this.props.navigation.pop()
    }
    _SaveCard=(value)=>{
        this.setState({
        saveCard:value
        })
    }
    _bookLesson=()=>{
  
    }
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{ color: White }}
                    headerText={'CHECK OUT'}
                    leftIconPress={() => this.goBack()}
                />
                <ScrollView style={styles.container}>
                    <View style={styles.content}>
                        <View style={{ width: '80%', }}>
                            <Text style={styles.textStyle}>Complete payement to book your lesson </Text>
                        </View>

                        <View style={styles.intputStyle}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Icon
                                    name={'credit-card'}
                                    type={'MaterialIcons'}
                                    style={{ fontSize: RFValue(20), color: lightGrey }}
                                />
                                <Text style={styles.paywithCard}>Pay with card</Text>
                            </View>
                            <View style={styles.paymentCards}>
                                <Thumbnail small square
                                    style={{ marginRight: RFValue(8) }}
                                    source={require('../../Assets/visacard.jpeg')}
                                />
                                <Thumbnail small square
                                    style={{ marginRight: RFValue(8) }}
                                    source={require('../../Assets/mastercard.jpeg')}
                                />
                                <Thumbnail small square
                                    style={{ marginRight: RFValue(8) }}
                                    source={require('../../Assets/american.png')}
                                />
                                <Thumbnail small square
                                    style={{ marginRight: RFValue(8) }}
                                    source={require('../../Assets/discover1.png')}
                                />
                                <Thumbnail square
                                    style={{ marginLeft: RFValue(10) }}
                                    source={require('../../Assets/paypal.png')}
                                />
                            </View>
                            {/* <View style={{ marginTop: RFValue(15) }}>
                                <CreditCardInput onChange={this._onChange}
                                    requiresName={true}
                                    labelStyle={{ color: 'green' }}
                                    //inputStyle={{color:'red',}}
                                    validColor={'green'}
                                    invalidColor={Red}
                                    allowScroll={true}

                                />
                            </View> */}
                            <View style={styles.information}>

                                <Text style={styles.heading}>Card Number</Text>
                                <View style={Platform.OS === 'android' ? [styles.inputView] : [styles.inputView, { paddingTop: 8, paddingBottom: 8 }]}>
                                    <TextInputMask
                                        style={styles.cardInput}
                                        placeholder={'.... .... .... ....'}
                                        onChangeText={(value) => { this.setState({ cardNumber: value }) }}
                                        keyboardType={'number-pad'}
                                        value={this.state.cardNumber}
                                        mask={"[0000] [0000] [0000] [0000]"}
                                    />
                                </View>

                                <View style={{ marginTop: RFValue(15), flexDirection: 'row' }}>
                                    <Text style={[styles.heading]}>Expiration Date</Text>
                                    <Text style={[styles.heading, { marginLeft: RFValue(8), color: lightGrey }]}>(MM/YY)</Text>
                                </View>
                                <View style={Platform.OS === 'android' ? [styles.inputView] : [styles.inputView, { paddingTop: 8, paddingBottom: 8 }]}>
                                    <TextInputMask
                                        style={styles.cardInput}
                                        placeholder={'MM/YY'}
                                        onChangeText={(value) => { this.setState({ expiry: value }) }}
                                        keyboardType={'number-pad'}
                                        value={this.state.expiry}
                                        mask={"[00]/[00]"}
                                    />
                                </View>

                                <View style={{ marginTop: RFValue(15), flexDirection: 'row' }}>
                                    <Text style={[styles.heading]}>cvv</Text>
                                    <Text style={[styles.heading, { marginLeft: RFValue(8), color: lightGrey }]}>(3 digits)</Text>
                                </View>
                                <View style={Platform.OS === 'android' ? [styles.inputView] : [styles.inputView, { paddingTop: 8, paddingBottom: 8 }]}>
                                    <TextInputMask
                                        style={styles.cardInput}
                                        placeholder={'...'}
                                        onChangeText={(value) => { this.setState({ cvv: value }) }}
                                        keyboardType={'number-pad'}
                                        value={this.state.cvv}
                                        mask={"[000]"}
                                    />
                                </View>


                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: RFValue(15), alignItems: 'center' }}>
                            {this.state.saveCard ?
                            <Icon
                               onPress={()=>this._SaveCard(!this.state.saveCard)}
                                name={'check-box'}
                                type={'MaterialIcons'}
                                style={{ fontSize: RFValue(20), color: _Yellow }}
                            />:
                             <Icon
                               onPress={()=>this._SaveCard(!this.state.saveCard)}
                                name={'checkbox-blank-outline'}
                                type={'MaterialCommunityIcons'}
                                style={{ fontSize: RFValue(20), color: lightGrey }}
                            /> }
                            <Text style={styles.paywithCard}>Save this card for easy payement</Text>
                        </View>

                        <View style={styles.buttonView}>
                            <_Button
                                styles={styles.buttonStyle}
                                onPress={()=>this._bookLesson()}
                                textButton={'Pay and book lesson -$15.25'}
                            />
                        </View>
                        <View style={styles.instructions}>
                            <Text style={{ color: lightGrey, textAlign: "center" }}>By clicking "Pay and book lesson" you agree to preply`s Refund Policy</Text>
                        </View>
                        <View style={styles.bottomBorder}></View>

                        <View style={styles.paymentInformation}>
                            <View style={{alignSelf:"flex-start"}}>
                            <Icon
                                name={'lock'}
                                type={'EvilIcons'}
                                style={{ fontSize: RFValue(25), color: lightGrey ,}}
                            />
                            </View>
                            <View style={{paddingHorizontal:RFValue(7)}}>
                            <Text style={styles.secureIns}>All payement info is encrypted and stored securely by braintree a PayPal service. we do not store
                            your payement info on our servers.
                            </Text>
                            </View>
                        </View>
                        {/* <View style={styles.information}>
                            <Text style={styles.heading}>Card Number</Text>
                           <NumberFormat customInput={_TextInput}
                           format=" #### #### #### ####"
                           type={'text'}
                           mask="."
                           inputBox={styles.intputStyle}
                           squarInput={true}
                           autoFocus={false}
                            placeholder={'.... .... .... ....'}
                          //  onChangeText={(value) => this.setState({ cardNumber: value })}
                          onChangeText={(value)=>this.CardNumber(value)}
                            value={this.state.card} 
                        />
                       
                            </View> */}


                        {/* <NumberFormat customInput={_TextInput} format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']}
                            placeholder={'enter numabe'}
                            onChangeText={(value) => this.setState({ expiry: value })}
                            value={this.state.expiry}

                        /> */}
                        {/* <CreditCardInput onChange={this._onChange}
            requiresName={true}
            labelStyle={{color:'green'}}
            //inputStyle={{color:'red',}}
            validColor={'green'}
            invalidColor={Red}
            allowScroll={true}
            
            /> */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}