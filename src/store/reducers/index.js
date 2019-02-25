import { combineReducers } from 'redux';

import authReducer from './authReducer.js';


export const RootReducer = combineReducers({
    authReducer
});


export {
    authReducer
};