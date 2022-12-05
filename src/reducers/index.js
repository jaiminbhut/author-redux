import AuthorReducer from '@/reducers/AuthorReducer';
import BookReducer from '@/reducers/BookReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  author: AuthorReducer,
  book: BookReducer,
});
