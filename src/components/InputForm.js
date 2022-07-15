import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/book';

const InputForm = () => {
  const dispatch = useDispatch();
  const [stateTitle, setTitle] = useState('');
  const [stateAuthor, setAuthor] = useState('');
  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const sendData = (e) => {
    e.preventDefault();

    dispatch(addBooks({
      title: stateTitle,
      author: stateAuthor,
      item_id: uuidv4(),
      category: 'action',

    }));
    setAuthor('');
    setTitle('');
  };

  return (
    <div className="inputDiv">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={sendData}>
        <div className="inputform">
          <input type="text" onChange={inputTitle} name="title" value={stateTitle} placeholder="Enter Book Title" />
          <input type="text" onChange={inputAuthor} name="author" value={stateAuthor} placeholder="Enter Author" />

        </div>

        <button type="submit">Add Book</button>

      </form>

    </div>

  );
};
export default InputForm;
