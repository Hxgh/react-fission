import { combineReducers } from 'redux';
import { counter } from './user';

export default combineReducers({
  counter: counter
});
