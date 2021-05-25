import React from 'react';
import {ToastContainer} from 'react-toastify';
import Navbar from './components/routing/Navbar';
import {AuthContext} from './components/authentication/AuthContext';
import {useState} from 'react';
import Routes from './components/routing/Routes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    const [auth, setAuth] = useState(false);
    const [username, setUsername] = useState("");


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


