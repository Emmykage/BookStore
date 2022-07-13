import React, { useState } from 'react';
// import { useDispatch } from 'react-redux/es/exports';

// import { v4 as uuidv4 } from 'uuid'
// import { addBooks } from '../redux/books/book';
//
const InputForm = () => {
  // const dispatch = useDispatch();
  const [state, setState] = useState({ title: '', author: '' });
  const inputUpdate = (e) =>{
    setState({ [e.target.name]: e.target.value

    })
  }

  return (

    <form>
      <input type="text" onChange={inputUpdate} name="title" value={state.title} placeholder="Enter NAme of Book" />
      <input type="text" onChange={inputUpdate} name="author" value={state.author} placeholder="Enter Name of AUthor" />
      <button type="button" >Add Book</button>

    </form>
  );
};
export default InputForm;
