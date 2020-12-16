import {createStore,applyMiddleware} from 'redux';
//createStore is used to create the store
//applyMiddleWare is used to connect thunk

import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from '../reducers'
//when we will mention only folder name it will consider the index file of reducers

const initialState = {}
const middleware = [thunk]
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

