import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { White } from '../../Colors';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../../Component/i18n';
import { UserInfo } from '../../Redux/Actions/User';
import { connect } from 'react-redux';
export class Splash extends Component {
    constructor(props) {
        super(props)
        AsyncStorage.getItem('lang').then((value) => {
            let data = JSON.parse(value);
            console.log('selected language', data)
            if (data) {
                I18n.locale = data
            } else {
                I18n.locale = 'eng'
            }
        })
    }
    componentDidMount() {
        this.getUserData()
        setTimeout(() => {
            this.props.navigation.navigate('_AppInfo')
        }, 3000)
    }
    getUserData = async () => {
        const item = await AsyncStorage.getItem('loginUser')
        if (item) {
            this.props.UserData(JSON.parse(item))
        }
    }
    render() {
        return (
            <ImageBackground style={styles.container}

                source={require('../../Assets/splash.png')}
            >

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //  justifyContent:'center',
        //  alignItems:'center',
        //  backgroundColor:White
    }
})

const mapStateToProps = (state) => {
    return {
        user: state.user.UserInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserData: (data) => {
            dispatch(UserInfo(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash)