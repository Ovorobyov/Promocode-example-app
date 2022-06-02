import {combineReducers} from 'redux';
import themeReducer from './themeReducer';
import apiReducer from './apiReducer';

export default combineReducers({
  theme: themeReducer,
  coupons: apiReducer,
});
