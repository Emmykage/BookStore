import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBooks } from '../redux/books/book';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    if (e.target.id === id) {
      dispatch(removeBooks(id));
    }
  };

  return (
    <>
      <li>

        <h2>
          Title:
          {title}
        </h2>
        <h3>
          Author:
          {author}
        </h3>
        <button id={id} onClick={deleteBook} type="button">Remove</button>

      </li>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

};

export default Book;
