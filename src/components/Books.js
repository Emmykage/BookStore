import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { serverBooks } from '../redux/books/book';
import Book from './Book';
import InputForm from './InputForm';

function Books() {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(serverBooks());
  }, []);
 

  return (
    <>
      <div className="bookList">
        <ul>

          {books.map((book) => (

            <Book key={book.item_id} title={book.title} author={book.author} id={book.item_id} />

          ))}

        </ul>

      </div>
      <div className="form">
        <InputForm />

      </div>

    </>
  );
}
export default Books;
