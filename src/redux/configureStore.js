import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import statusReducer from './categories/categories';

// const rootReducer = combineReducers({ bookReducer, statusReducer });
const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: statusReducer,
  },
});
export default store;
