import React, { useState, useEffect } from 'react';
import loginImg from '../../logo.png';
import Login from './Login';
import Register from './Register';
import RightSide from './RightSide';
import './Style.scss';

export default function AppLogin() {
  const [toggle, setToggle] = useState(false);
  const current = toggle ? 'Register' : 'Login';
  // const currentActive = isLoginActive ? 'login' : 'register';

  const handleOnClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    // setToggle(!toggle);
    
  }, []);

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          <div className="image">
            <img src={loginImg}></img>
          </div>
          {toggle ? (
            <Login containerRef={current} />
          ) : (
            <Register containerRef={current} />
          )}
        </div>
        <RightSide current={current} onClick={handleOnClick} />
      </div>
    </div>
  );
}
