// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
// import { deleteBook, url } from '../../components/API';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jV5kL6WBSVByz33DWa4Y/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const SERVER = 'bookstore/books/SERVER';

// export function addBooks(payload) {
//   return {
//     type: ADD_BOOK,
//     payload,
//   };
// }
// export function removeBooks(id) {
//   return {
//     type: REMOVE_BOOK,
//     id,
//   };
// }

const defaultState = [];

export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];

    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.id)];

    default:
      return state;
  }
}

export const serverBooks = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  if (response.status === 200) {
    const payLoad = Object.keys(response.data).map((idKey) => ({
      item_id: idKey,
      ...response.data[idKey][0],
    }));
    dispatch({
      type: SERVER,
      payLoad,
    });
  }
};
export function addBooks(payload) {
  return async function hey(dispatch) {
    try {
      const response = await axios.post(baseUrl, payload);
      if (response.status === 201) {
        return dispatch({
          type: ADD_BOOK,
          payload,
        });
      }
      throw new Error();
    } catch (error) {
      return 'book failed to save';
    }
  };
}
export const removeBooks = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    if (response.status === 2001) {
      return dispatch({
        type: REMOVE_BOOK,
        id,
      });
    }
    throw new Error();
  } catch (error) {
    return 'Book no deleted';
  }
};
