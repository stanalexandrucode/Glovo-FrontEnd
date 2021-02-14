import React, { useState, useEffect, useRef } from 'react';
import loginImg from '../../logo.png';
import Login from './Login';
import Register from './Register';
import RightSide from './RightSide';
import './Style.scss';

export default function AppLogin() {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [rightSide, setRightSide] = useState('');
  const current = isLoginActive ? 'Register' : 'Login';
  const currentActive = isLoginActive ? 'login' : 'register';
  const containerRef = 'container';

  const changeState = () => {
    console.log('intra');
    // if (isLoginActive) {
    //   RightSide.classList.remove('right');
    //   RightSide.classList.add('left');
    // } else {
    //   RightSide.classList.remove('left');
    //   RightSide.classList.add('right');
    // }
    // setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }));
  };

  const handleOnClick = () => {
    changeState();
    setIsLoginActive(!isLoginActive);
  };

  useEffect(() => {
    setIsLoginActive(!isLoginActive);
  }, []);

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          <div className="image">
            <img src={loginImg}></img>
          </div>
          {isLoginActive ? (
            <Login containerRef={current} />
          ) : (
            <Register containerRef={current} />
          )}
        </div>
        <RightSide
          current={current}
          // currentActive={currentActive}
          // containerRef = rightSide
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
}

// class AppLogin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoginActive: true,
//     };
//   }

//   componentDidMount() {
//     //Add .right by default
//     this.rightSide.classList.add('right');
//   }

// changeState() {
//   const { isLoginActive } = this.state;

//   if (isLoginActive) {
//     this.rightSide.classList.remove('right');
//     this.rightSide.classList.add('left');
//   } else {
//     this.rightSide.classList.remove('left');
//     this.rightSide.classList.add('right');
//   }
//   this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }));
// }

//   render() {
//     const { isLoginActive } = this.state;
//     const current = isLoginActive ? 'Register' : 'Login';
//     const currentActive = isLoginActive ? 'login' : 'register';
// return (
//   <div className="App">
//     <div className="login">
//       <div className="container" ref={(ref) => (this.container = ref)}>
//         <div className="image">
//           <img src={loginImg}></img>
//         </div>
//         {isLoginActive && (
//           <Login containerRef={(ref) => (this.current = ref)} />
//         )}
//         {!isLoginActive && (
//           <Register containerRef={(ref) => (this.current = ref)} />
//         )}
//       </div>
//       <RightSide
//         current={current}
//         currentActive={currentActive}
//         containerRef={(ref) => (this.rightSide = ref)}
//         onClick={this.changeState.bind(this)}
//       />
//     </div>
//   </div>
// );
//   }
// }

// const RightSide = (props) => {
//   return (
//     <div
//       className="right-side"
//       ref={props.containerRef}
//       onClick={props.onClick}
//     >
//       <div className="inner-container">
//         <div className="text">{props.current}</div>
//       </div>
//     </div>
//   );
// };

// export default AppLogin;
