import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import { CardItem, Left, Body, Right, Thumbnail, Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Black, BorderBottom, lightGreen, _Yellow } from '../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
const _TutorsList = (props) => {
    return (
        <TouchableOpacity style={styles.container}
        onPress={props.onPress}
        >
            <CardItem>
                <Left style={{ flex: 2.3, alignSelf: 'flex-start' }}>
                    <Thumbnail circular style={{ justifyContent: 'flex-start' }}
                        source={require('../Assets/download.jpeg')}
                    />
                </Left>
                <Body style={{ flex: 7, marginTop: RFValue(5) }}>
                    <View style={styles.nameView}>
                        <Text style={styles.tutorName}>{props.item.name}</Text>
                        <Image
                            style={styles.nationalFlag}
                            source={require('../Assets/nationalflag.png')}
                        />
                    </View>
                    <View style={styles.lessonView}>
                {props.item.type ?
                            <Text style={styles.Newtext}>{'New'}</Text>
                            :
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.ratingCount}>{props.item.rating}</Text>
                                <Icon
                                    name={'star-border'}
                                    type={'MaterialIcons'}
                                    style={{ fontSize: RFValue(14), color: _Yellow, marginTop: RFValue(1) }}
                                />
                                <Text style={styles.totlReview}>{props.item.review}</Text>
                                <Text style={styles.Count}>{props.item.totalLesson}</Text>
                                <Text style={styles.lessonsText}>{'lessons'}</Text>
                            </View>
                    }
                    </View>
                    <View style={{ marginTop: RFValue(8) }}>
                <Text style={styles.tutorCategory}>{props.item.tutorCategory}</Text>
                    </View>
                </Body>
                <Right style={{ flex: 2, alignSelf: 'flex-start', marginTop: RFValue(5) }}>
                    <Text style={styles.RatePerHour}>
                       {props.item.ratePerHour}
                   </Text>
                </Right>
            </CardItem>
            <View style={styles.bottomBorder}></View>
        </TouchableOpacity>
    )
}
export default _TutorsList;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: RFValue(4)
    },
    nameView: {
        flexDirection: 'row'
    },
    tutorName: {
        fontWeight: '500',
        fontSize: RFValue(14),
        color: Black
    },
    nationalFlag: {
        width: RFValue(20),
        height: RFValue(15),
        marginLeft: RFValue(3),
        marginTop: RFValue(3)
    },
    lessonView: {
        flexDirection: 'row',
        marginTop: RFValue(5),

    },
    Newtext: {
        fontSize: RFValue(14),
        color: lightGreen
    },
    Count: {
        color: Black,
        fontSize: RFValue(12),
        fontWeight: '500',
        marginTop: RFValue(2),
        marginLeft: RFValue(5)
    },
    lessonsText: {
        fontWeight: '500',
        fontSize: RFValue(12),
        color: Black,
        marginLeft: RFValue(5),
        marginTop: RFValue(2)
    },
    RatePerHour: {
        color: _Yellow,
        fontSize: RFValue(12),
        fontWeight: '500',
    },
    tutorCategory: {
        fontWeight: '500',
        fontSize: RFValue(12),
        color: Black
    },
    bottomBorder: {
        width: '90%',
        borderBottomColor: BorderBottom,
        borderBottomWidth: 0.5,
        alignSelf: 'center',
        marginTop: RFValue(3)
    },
    ratingCount: {
        color: _Yellow,
        marginTop: RFValue(1),
        fontSize: RFValue(12),
        marginRight: RFValue(2)
    },
    totlReview: {
        color: '#979797',
        fontSize: RFValue(12),
        fontWeight: '500',
        marginLeft: RFValue(5),
        marginTop: RFValue(1)
    }
})