import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';

export default combineReducers({
  list: bookReducer,
  filter: filterReducer,
});
