import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Black ,lightGrey} from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { convertDateToString } from '../RandomFun';

const _Resume = (props) => {
    
    let startDate = convertDateToString(new Date(props.item.startDate))
    let endDate = convertDateToString(new Date(props.item.endDate))
    console.log('resume zheeeee ',props.item)
    return (
          <View style={{ paddingVertical: RFValue(10) }}>
              {props.education ?
            <View>
            <Text style={styles.category}>{props.item.courseName}</Text>
            <View>
            <Text style={styles.level}>{startDate}  {endDate}</Text>
            </View>
            </View>:

             <View>
             <Text style={styles.category}>{props.item.name}</Text>
             <View>
             <Text style={styles.level}>{startDate}  {endDate}</Text>
             </View>
             </View>
            
            }


          </View>

    )
}
export default _Resume;
const styles = StyleSheet.create({
    category: {
        color:Black,
        fontSize: RFValue(14),
        fontWeight: "bold",
    },
    level:{
        color:lightGrey,
        fontSize: RFValue(16),
        fontWeight: '300',
    }
})