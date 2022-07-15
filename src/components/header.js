import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link className="logo" to="/"><h1>BookStore CMS</h1></Link>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>

    </nav>
  </header>
);

export default Header;
