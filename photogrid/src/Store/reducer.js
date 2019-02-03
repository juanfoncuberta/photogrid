import { combineReducers } from 'redux';
import { homeReducer } from './Home';
import { homeSetWarningVisibile } from './HomeChange';

export default combineReducers({
  home: homeReducer,
  homeChange: homeSetWarningVisibile
});
