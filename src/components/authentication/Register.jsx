import React from 'react';
import { useState } from 'react';
import { axiosSpring } from '../../common/axios';

export default function Register() {
  const [userData, setUserData] = useState('');

  const handleOnClick = (e) => {
    e.preventDefault();
    if (register()) {
      console.log('inregistrare ok, redirecteaza pe login');
    }
  }; 

  const register = async () => {
    const object = {
      firstName: 'gigi',
      lastName: 'tot gigi',
      email: 'gigi email',
      password: 'parola lui gigi',
    };
    let res = await axiosSpring.post('/register', object);
    console.log(res);

    if (res.status === 200) {
      console.log('s-a postat');
      return true;
    }
    return false;
  };

  return (
    <div>
      <h1>Welcome to register</h1>
      <button onClick={handleOnClick}>Register</button>
    </div>
  );
}
