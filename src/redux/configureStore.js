import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import statusReducer from './categories/categories';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: statusReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
