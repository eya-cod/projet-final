import { combineReducers } from 'redux';
import authReducer from './authReducer';
import rdvReducer from './rdvReducer';
import biensReducer from './biensReducer';
import usersReducer from './usersReducer';

export default combineReducers({ authReducer,rdvReducer,biensReducer,usersReducer });