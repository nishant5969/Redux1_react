//import { createStore, applyMiddleware } from 'redux';
//import promisseMiddleware from 'redux-promise';
//import reducer from '../reducer';

//let store = createStore(reducer, applyMiddleware(promisseMiddleware));

//export default store;



import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducer/index';

let store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

export default store;
