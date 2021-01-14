import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo2.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} width="150" />
      </Link>
      <Link className="navbar-brand" to="/favorites">
        my favorites
      </Link>
      <Link className="navbar-brand" to="/login">
        login
      </Link>
      <Link className="navbar-brand" to="/register">
        register
      </Link>
      <Link className="navbar-brand" to="/logout">
        logout
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default Navbar;
