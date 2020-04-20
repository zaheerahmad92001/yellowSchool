import React ,{Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform
}from 'react-native';
import { headerColor, White ,_Yellow, Black} from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon, Header ,Container} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {height:screenHeight,width:screenWidth} = Dimensions.get('window');
import styles from './styles'

export default class SearchView extends Component{
    render(){
        return(
            <Container style={styles.container}>
            <View style={styles.header}>
            <StatusBar backgroundColor={_Yellow} barStyle={'light-content'}/>
            <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',bottom:RFValue(15)}}>
                
            </View>
            </View>
            </Container>
        )
    }
}