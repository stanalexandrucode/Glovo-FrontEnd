import React from 'react';

import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

export default function Logout() {

  const history = useHistory();
  const navigateTo = () => {
    Cookies.remove('token');
    history.push('/');
  };

  return (
    <div>
      <h1>Welcome to logout</h1>
      <button onClick={navigateTo}>Logout</button>
    </div>
  );
}

