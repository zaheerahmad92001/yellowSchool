import {createStore,applyMiddleware}from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from '../Reducers';
import saga from '../../saga';
let sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga)
export default store;
