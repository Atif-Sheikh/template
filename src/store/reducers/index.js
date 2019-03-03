import { combineReducers } from 'redux';

import authReducer from './authReducer.js';
import projectReducer from './projectReducer.js';


export const RootReducer = combineReducers({
    authReducer,
    projectReducer
});


export {
    authReducer
};