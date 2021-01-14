import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import Cookies from 'js-cookie';

const Login = () => {
  const { authorization } = useContext(AuthContext);

  const [auth, setAuth] = authorization;
  console.log(auth);

  const handleOnClick = () => {
    setAuth(true);
    Cookies.set('user', 'true');
  };

  return (
    <div>
      <h1>Welcome to login</h1>
      <button onClick={handleOnClick}>Login</button>
    </div>
  );
};

export default Login;
