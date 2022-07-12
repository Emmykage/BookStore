import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import bookReducer from "./books/book";
import statusReducer from "./categories/categories";

const rootReducer = combineReducers({bookReducer, statusReducer})
const store = configureStore({reducer: rootReducer})
export default store;