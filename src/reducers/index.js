import { combineReducers } from 'redux';
import cardReducer from './cards';
import filterReducer from './filter';

export default combineReducers({
  cards: cardReducer,
  filter: filterReducer,
});
