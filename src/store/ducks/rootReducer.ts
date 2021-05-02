import { combineReducers } from 'redux';
import localtime from './localtime';
import user from './user';

export default combineReducers({
  user,
  localtime,
});
