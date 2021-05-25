import React from 'react';
import {ToastContainer} from 'react-toastify';
import Navbar from './components/routing/Navbar';
import {AuthContext} from './components/authentication/AuthContext';
import {useState} from 'react';
import Routes from './components/routing/Routes';
import Cookies from './../node_modules/js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

    const initAuth = () => {
        if (Cookies.get('auth')) {
            Cookies.get('auth')
            console.log(Cookies.get('auth'))
        } else {
            Cookies.set('auth', false);
        }
        // Cookies.get('auth')
    };
    const user = Cookies.get('name');
    const [auth, setAuth] = useState(initAuth);
    const [username, setUsername] = useState(user);


    return (
        <React.Fragment>
            <ToastContainer/>
            <AuthContext.Provider value={{auth, setAuth, username, setUsername}}>
                <Navbar/>
                <main>
                    <Routes/>
                </main>
            </AuthContext.Provider>
        </React.Fragment>
    );
}

export default App;


