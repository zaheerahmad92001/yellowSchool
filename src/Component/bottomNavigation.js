import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { White, BorderBottom,Black,lightGrey,_Yellow } from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';
const _BottomNavigation = (props) => {
    return (
        <View style={styles.BottomNavigation}>
            <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "center" }}>
                <Icon
                    name={'ios-search'}
                    type={'Ionicons'}
                    style={props.changeSearchIconColor ?[styles.searchIcon,{color:White}]:[styles.searchIcon]}
                    onPress={props.SearchClick}
                />
                <Icon />
                <Icon
                    name={'message-circle'}
                    type={'Feather'}
                    style={props.changeMessageIconColor?[styles.searchIcon,{color:White}]:[styles.searchIcon]}
                    onPress={props.MessageClick}
                />
                <Icon />
                <Icon
                    name={'user'}
                    type={'Feather'}
                    style={props.changeUserIconColor?[styles.searchIcon,{color:White}]:[styles.searchIcon]}
                    onPress={props.UserClick}
                />
                <Icon />
                <Icon
                    name={'settings'}
                    type={'Feather'}
                    style={props.changeSettingIconColor? [styles.settingIcon,{color:White}]:[styles.settingIcon]}
                    onPress={props.SettingClick}
                />
                <Icon />
            </View>

        </View>
    )
}
export default _BottomNavigation;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:White
    },
    content:{
        flex:1,
        marginTop:RFValue(10)    
    },
    contentSecond:{
        marginHorizontal:RFValue(20),
        marginTop:RFValue(20),
        flex:8.5,
    },
    settingStyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bottomBorder:{
        width:'100%',
        borderBottomColor:BorderBottom,
        borderBottomWidth:0.5,
        marginTop:RFValue(15),
        marginBottom:RFValue(15)
    },
    Heading:{
        fontSize:RFValue(12),
        color:Black,
        fontWeight:'500'

    },
    versionText:{
        color:lightGrey,
        fontSize:RFValue(12),
        fontWeight:'500'
    },
    BottomNavigation:{
        flex:1.5,
        backgroundColor:_Yellow,
        borderTopRightRadius:RFValue(32),
        borderTopLeftRadius:RFValue(32),
        justifyContent:'center', 
    },
    searchIcon:{
        fontSize: RFValue(22), 
        color: lightGrey 
    },
    settingIcon:
    { fontSize: RFValue(20), color: lightGrey }
})