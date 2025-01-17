import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Login</Link>
      <Link to="/home">Home</Link>
      <Link to="/invoice-form">Invoice Form</Link>
    </nav>
  );
};

export default Navbar;
