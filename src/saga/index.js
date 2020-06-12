import {all}from 'redux-saga/effects';
import user from '../saga/user';
const root = function* (){
    yield all([
        user()
    ])
}
export default root;