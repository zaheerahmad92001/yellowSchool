import React,{Component}from 'react';
import{
    View,
    Text,
    Dimensions,
    Image
}from 'react-native';
import styles from './styles';
import { Black } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Thumbnail } from 'native-base';
import _Button from '../../Component/_Button';
export default class PaymentMethods extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    _saveCard=()=>{
this.props.navigation.navigate('CheckOut')
    }
    render(){
        return(
            <View style={styles.container}>
             <Text style={styles.paymentText}>Payment methods</Text>
             <View style={styles.bottomBorder}></View>
             <View style={styles.content}>
                 <Text style={[styles.paymentText,{color:Black,fontWeight:'300'}]}>Save a card</Text>
                 <View style={{marginTop:RFValue(10)}}>
                     <Text style={styles.infoText}>
                      Make fast and easy payments. save a card to use refills and keep weekly lessons 
                      reserverd automatically. 
                     </Text>
                     <Text style={[styles.infoText,{marginTop:RFValue(5)}]}>
                      Payment info is encrypted and stored securely by the Braintree , a Paypal service.
                     </Text>
                     <View style={styles.paymentCards}>
                       <Thumbnail small square 
                       style={{marginRight:RFValue(8)}}
                       source={require('../../Assets/visacard.jpeg')}
                       />
                        <Thumbnail small square 
                       style={{marginRight:RFValue(8)}}
                       source={require('../../Assets/mastercard.jpeg')}
                       />
                        <Thumbnail small square 
                       style={{marginRight:RFValue(8)}}
                       source={require('../../Assets/american.png')}
                       />
                        <Thumbnail small square 
                       style={{marginRight:RFValue(8)}}
                       source={require('../../Assets/discover1.png')}
                       />
                     </View>
                     <View style={styles.buttonStyle}>
                    <_Button
                    styles={[styles.saveCard]}
                    textButton={'Save a card'}
                    onPress={()=>this._saveCard()}
                    />
                    </View>
                 </View>
             </View>
            </View>
        )
    }
}