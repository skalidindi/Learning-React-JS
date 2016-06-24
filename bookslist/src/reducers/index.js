import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActivieBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActivieBookReducer,
});

export default rootReducer;
