import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export function addBooks(payload) {
  return {
    type: ADD_BOOK,
    payload,
  };
}
export function removeBooks(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

const defaultState = [
  {
    id: uuidv4(),
    title: 'Book One',
    author: 'Author one',
  },
  {
    id: uuidv4(),
    title: 'Book Two',
    author: 'Author Two',
  },
  {
    id: uuidv4(),
    title: 'Book Three',
    author: 'Author Three',
  },
  {
    id: uuidv4(),
    title: 'Book Four',
    author: 'Author Five',
  },

];

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
