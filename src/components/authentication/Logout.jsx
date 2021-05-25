import React from 'react';
import Cookies from '../../../node_modules/js-cookie';
import { useHistory } from 'react-router-dom';
import './Register.css';

export default function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('name');
    Cookies.remove('auth');
    Cookies.remove('id_user_DB');
    window.location.href = '/';
    // history.push('/');
  };

  return (
    <div className="logout">
      <h1>are you sure you want to logout?</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
