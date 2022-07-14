const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jV5kL6WBSVByz33DWa4Y/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const defaultState = [];

export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];

    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.item_id !== action.id)];
    case GET_BOOK:
      return [...action.payload];
    default:
      return state;
  }
}

export const serverBooks = () => async (dispatch) => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  const books = [];
  Object.keys(data).forEach((e) => {
    books.push({ ...data[e][0], item_id: e });
  });
  dispatch({
    type: GET_BOOK,
    payload: books,
  });
};
export const addBooks = (book) => async (dispatch) => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

export const removeBooks = (id) => async (dispatch) => {
  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};
