import {takeLatest}from 'redux-saga/effects';
import {USER}from '../Redux/Actions/types';
import store from '../Redux/Store';
import AsyncStorage from '@react-native-community/async-storage'

const saveUser = function* saveUser(payload){
    console.log('inside saveUser generator fun',JSON.stringify(payload))
    const user = store.getState().user.UserInfo
    // console.log('inside generateor fun',user)
     yield AsyncStorage.setItem('loginUser',JSON.stringify(user))

}
const user = function* user(){
    yield takeLatest(USER,saveUser)
};
export default user