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
  const [rightSide, setRightSide] = useState('right');

  //TODO de facut state la get cookie-uri! si de bagat dependency  pe slide sa se mute de pe register pe login
  // const currentActive = isLoginActive ? 'login' : 'register';

  const handleOnClick = () => {
    setToggle(!toggle);
    // if (Cookies.get('slide') || Cookies.get('token')) {
    //   setToggle(true);
    // }

    if (rightSide === 'right') {
      setRightSide('left');
      // setToggle(!toggle);
    } else {
      setRightSide('right');
      // setToggle(toggle);
    }
  };

  useEffect(() => {
    // if (Cookies.get('slide') || Cookies.get('token')) {
    // setToggle(true);
    // }
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
        <RightSide current={current} side={rightSide} onClick={handleOnClick} />
      </div>
    </div>
  );
}

// import React, { useState, useEffect, containerRef } from 'react';
// import loginImg from '../../logo.png';
// import Login from './Login';
// import Register from './Register'
// import './Style.scss';

// class AppLogin extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     isLogginActive: true
//   };
// }

// componentDidMount() {
//   //Add .right by default
//   this.rightSide.classList.add("right");
// }

// changeState() {
//   const { isLogginActive } = this.state;

//   if (isLogginActive) {
//     this.rightSide.classList.remove("right");
//     this.rightSide.classList.add("left");
//   } else {
//     this.rightSide.classList.remove("left");
//     this.rightSide.classList.add("right");
//   }
//   this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
// }

// render() {
//   const { isLogginActive } = this.state;
//   const current = isLogginActive ? "Register" : "Login";
//   const currentActive = isLogginActive ? "login" : "register";
//   return (
//     <div className="App">
//       <div className="login">
//         <div className="container" ref={ref => (this.container = ref)}>
//         <div className='image'>
//             <img src={loginImg}></img>
//           </div>
//           {isLogginActive && (
//             <Login containerRef={ref => (this.current = ref)} />
//           )}
//           {!isLogginActive && (
//             <Register containerRef={ref => (this.current = ref)} />
//           )}
//         </div>
//         <RightSide
//           current={current}
//           currentActive={currentActive}
//           containerRef={ref => (this.rightSide = ref)}
//           onClick={this.changeState.bind(this)}
//         />
//       </div>
//     </div>
//   );
// }
// }

// const RightSide = props => {
// return (
//   <div
//     className="right-side"
//     ref={props.containerRef}
//     onClick={props.onClick}
//   >
//     <div className="inner-container">
//       <div className="text">{props.current}</div>
//     </div>
//   </div>
// );
// };

// export default AppLogin;
