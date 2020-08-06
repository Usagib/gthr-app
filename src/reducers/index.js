import { combineReducers } from 'redux';
import cardReducer from './cards';

export default combineReducers({
  cards: cardReducer,
});
