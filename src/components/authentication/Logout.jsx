import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import Cookies from 'js-cookie';

export default function Logout() {
  const { authorization } = useContext(AuthContext);

  const [auth, setAuth] = authorization;
  console.log(auth);

  const handleOnClick = () => {
    setAuth(false);
    Cookies.remove('user');
  };

  return (
    <div>
      <h1>Welcome to logout</h1>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  );
}
