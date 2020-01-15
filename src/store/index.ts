import { combineReducers } from 'redux';
import { counter } from './reducers/user';

export default combineReducers({
  counter:counter
});
