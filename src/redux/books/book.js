const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export function addBooks(title, author, id) {
  return {
    type: ADD_BOOK,
    title,
    author,
    id,
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
    id: 1,
    title: 'Book One',
    author: 'Author one',
  },
  {
    id: 2,
    title: 'Book Two',
    author: 'Author Two',
  },
  {
    id: 3,
    title: 'Book Three',
    author: 'Author Three',
  },
  {
    id: 4,
    title: 'Book Four',
    author: 'Author Five',
  },

];

export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state.books, {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVE_BOOK:
      return [
        ...state.books.filter((book) => book.id !== action.id)];

    default:
      return state;
  }
}
