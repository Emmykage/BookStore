import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputForm from './InputForm';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <>
      <div className="bookList">
        <ul>

          {books.map((book) => (

            <Book key={book.id} title={book.title} author={book.author} id={book.item_id} />

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
