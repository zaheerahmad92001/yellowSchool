import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Black ,lightGrey} from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';

const _AgeList = (props) => {
    return (
        !props.levelOfStudents ?
        <View style={{ paddingVertical: RFValue(10) }}>
            <Text style={styles.category}>{props.item.category}
                <Text style={styles.category}> (</Text>
                <Text style={styles.category} >{props.item.age}</Text>
                <Text style={styles.category} >)</Text>
            </Text>
        </View>
        :
     <View style={{ paddingVertical: RFValue(10) }}>
       <Text style={styles.level}>{props.item.level}</Text>
        </View>
    )
}
export default _AgeList;
const styles = StyleSheet.create({
    category: {
        color: lightGrey,
        fontSize: RFValue(16),
        fontWeight: '300',
    },
    level:{
        color:Black,
        fontSize: RFValue(16),
        fontWeight: '300',
    }
})