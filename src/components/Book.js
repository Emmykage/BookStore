import React from 'react';
import './percentageStyle.css';
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
        <div className="col-1">
          <span> Reality</span>
          <h2>

            { title}
          </h2>
          <h3>
            {author}
          </h3>

          <ul className="bottom-btn" />
          <div className="buttons">
            <button type="button">comment</button>
            <button id={id} onClick={deleteBook} type="button">Remove</button>
            <button type="button">Edit</button>

          </div>

        </div>
        <div className="col-2">
          <div className="clearfix">

            <div className="c100 p75 mid">
              <span>75%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
            <div>
              <p>75%</p>
              <span> Completed</span>
            </div>

          </div>

        </div>
        <div className="col-3 col-chapter">
          <span>current chapter</span>
          <h3>chapter 17</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>

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
