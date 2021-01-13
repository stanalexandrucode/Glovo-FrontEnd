import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/routing/Navbar';
import AuthApi from './components/authentication/AuthApi';
import { useState } from 'react';
import Routes from './components/routing/Routes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar auth={auth} />
      <main className="container">
        <AuthApi.Provider value={(auth, setAuth)}>
          <Routes />
        </AuthApi.Provider>
      </main>
    </React.Fragment>
  );
}

export default App;
