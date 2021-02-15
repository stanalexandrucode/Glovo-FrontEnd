import React, { useState, useEffect } from 'react';
import loginImg from '../../logo.png';
import Login from './Login';
import Register from './Register';
import RightSide from './RightSide';
import Cookies from 'js-cookie';
import './Style.scss';

export default function AppLogin() {
  const [toggle, setToggle] = useState(false);
  const [doSlide, setDoSlide] = useState();
  const current = toggle ? 'Register' : 'Login';

  //TODO de facut state la get cookieuri! si de bagat dependency  pe slide sa se mute de pe register pe login
  // const currentActive = isLoginActive ? 'login' : 'register';

  const handleOnClick = () => {
    setToggle(!toggle);
    // if (Cookies.get('slide') || Cookies.get('token')) {
    //   setToggle(true);
    // }
  };

  useEffect(() => {
    if (Cookies.get('slide') || Cookies.get('token')) {
      setToggle(true);
    }
  }, [toggle]);

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
