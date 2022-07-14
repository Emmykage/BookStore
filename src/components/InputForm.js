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

    }));
    setAuthor('');
    setTitle('')
  };

  return (

    <form onSubmit={sendData}>
      <input type="text" onChange={inputTitle} name="title" value={stateTitle} placeholder="Enter Book Title" />
      <input type="text" onChange={inputAuthor} name="author" value={stateAuthor} placeholder="Enter Author" />
      <button type="submit">Add Book</button>

    </form>
  );
};
export default InputForm;
