import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />

      </Routes>

    </>
  );
}

export default App;
