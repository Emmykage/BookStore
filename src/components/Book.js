import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
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
        <button type="button">Remove</button>

      </li>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,

};

export default Book;
