import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import bookReducer from './books/book';
import statusReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: statusReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
