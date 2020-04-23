import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image, Platform } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Black, _Yellow, White } from '../Colors';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const FromMessage = (props) => {
    // <View style={{}}>
    // console.log('Hassan',props.item)
    // const { item } = props;
    return (
        <View>
            <View style={styles.container}>
                <View style={{ backgroundColor: '#222326', borderRadius: 10, padding: 10 }}>
                    <Text style={styles.TextStyle}>{'Hello Mehr T.'}</Text>
                </View>
                <Text style={{ color: '#000000', alignSelf: 'flex-start', marginRight: 5, fontSize: 12, marginTop: 3, marginBottom: 10 }}>{'10:47'}</Text>

            </View>

            <View style={styles.container2}>

                <View style={{ backgroundColor: _Yellow, borderRadius: 10, padding: 10 }}>
                    <Text style={styles.TextStyle2}>{"hi! How are you"}</Text>
                </View>

                <Text style={{ color: '#000000', alignSelf: 'flex-end', marginLeft: 5, fontSize: 12, marginBottom: 10 }}>{'10:48 PM'}</Text>

            </View>
        </View>
    )
}


export default FromMessage;

var styles = StyleSheet.create({

    TextStyle: {

        fontSize: RFValue(14),
        color: White,
    },
    TextStyle2: {

        fontSize: RFValue(14),
        color: White,
        alignSelf: 'flex-start'
    },
    container: {
        padding: 5,
        marginHorizontal: 15,
        marginRight: 40,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    container2: {
        padding: 5,
        marginHorizontal: 15,
        marginLeft: 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        color: '#F7FAFC',

        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: RFValue(14),
        alignSelf: 'center',
    }
});
