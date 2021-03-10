import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/routing/Navbar';
import { AuthContext } from './components/authentication/AuthContext';
import { useState } from 'react';
import Routes from './components/routing/Routes';
import Cookies from './../node_modules/js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [auth, setAuth] = useState(false);
  const readCookie = () => {
    const user = Cookies.get('name');
    if (user) {
      setAuth(true);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <AuthContext.Provider value={{ authorization: [auth, setAuth] }}>
        <Navbar auth={auth} />
        <main>
          <Routes />
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;

//   {/* <Route path="/search/:country" component={HotelsList} />
//           <Route path="/search" component={Search} /> */}
