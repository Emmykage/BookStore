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

const defaultState = {
  books: [],
};

export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [
          ...state.books, {
            id: action.id,
            title: action.title,
            author: action.author,
          },
        ],
      };

    case REMOVE_BOOK:
      return {
        books: [
          ...state.books.filter((book) => book.id !== action.id)],
      };

    default:
      return state;
  }
}
