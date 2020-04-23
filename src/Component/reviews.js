import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,

}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { lightGrey, Black, _Yellow, BorderBottom } from '../Colors';
import { CardItem, Left, Thumbnail, Body } from 'native-base';
const _Reviews=(props)=>{
    
    return(
        <View style={styles.container}>
            <CardItem>
                <Left style={{ flex:2, alignSelf: 'flex-start' }}>
                    <Thumbnail circular style={{ justifyContent: 'flex-start' }}
                        source={require('../Assets/download.jpeg')}
                    />
                </Left>
                <Body style={{ flex:8, marginTop: RFValue(5) }}>
                    <View style={{ marginTop: RFValue(8) }}>
                 <Text style={styles.tutorName}>{props.item.name}</Text>
                 <Text style={styles.dateText}>{props.item.reviewDate}</Text>
                    </View>
                </Body>
                
            </CardItem>
            <View style={{marginHorizontal:RFValue(14)}}>
            <Text style={styles.message}>{props.item.message}</Text>
            </View>
            { props.index <2 ?
            <View style={[styles.bottomBorder,{marginTop:RFValue(10)}]}></View> :null 
            }  
        </View>
    )
}
export default _Reviews;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: RFValue(4)
    },
    message:{
        fontWeight: '400',
        fontSize: RFValue(12),
        color: Black
    },
    tutorName: {
        fontWeight: '500',
        fontSize: RFValue(14),
        color: Black
    },
dateText:{
    fontWeight: '500',
    fontSize: RFValue(14),
    color: lightGrey,
    marginTop:RFValue(5)
},
    bottomBorder: {
        width: '95%',
        borderBottomColor: _Yellow,
        borderBottomWidth:1,
        alignSelf: 'center',
        marginTop: RFValue(3)
    },
    
})