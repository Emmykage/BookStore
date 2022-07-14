import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import statusReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: statusReducer,
  },
});
export default store;
