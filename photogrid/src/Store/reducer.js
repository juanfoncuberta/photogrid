import { combineReducers } from 'redux';
import { homeReducer } from './Home';

export default combineReducers({
  home: homeReducer
});
