import React from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

export default function Logout() {
  const history = useHistory();
  const navigateTo = () => {
    Cookies.remove('token');
    Cookies.remove('name');
     Cookies.remove('id_user_DB');
    history.push('/');
  };

  return (
    <div>
      <h1>Welcome to logout</h1>
      <button onClick={navigateTo}>Logout</button>
    </div>
  );
}
