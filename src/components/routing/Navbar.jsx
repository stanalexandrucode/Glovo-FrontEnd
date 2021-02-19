import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo2.png';
import { Cookies } from 'js-cookie';
import { AuthContext } from '../login/AuthContext';

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState('empty');

  // const [userName, setUserName] = useContext(AuthContext);

  // console.log('object');
  // const readCookie = () => {
  //   const user = Cookies.get('name');
  //   if (user) {
  //     setLoggedUser(user);
  //   }
  // };

  useEffect(() => {
    // readCookie();
    // console.log(userName);
  }, [loggedUser]);

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <img className="img-logo" src={logo} alt="site logo" />
      </Link>
      <NavLink className="navbar-brand" to="/favorites">
        my favorites
      </NavLink>
      <NavLink className="navbar-brand" to="/recipes/addRecipe">
        add recipe
      </NavLink>
      {/* <NavLink className="navbar-brand" to="/login">
        login
      </NavLink> */}
      <NavLink className="navbar-brand" to="/register">
        register
      </NavLink>
      <Link className="navbar-brand" to="/logout">
        logout
      </Link>
      <NavLink className="navbar-brand" to="/cart">
        cart
      </NavLink>
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
      <Link className="navbar-brand">
        {loggedUser !== 'empty' ? Cookies.get('name') : 'not logged in'}
      </Link>
    </nav>
  );
};

export default Navbar;
