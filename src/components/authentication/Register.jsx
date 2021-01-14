import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { axiosSpring } from '../../common/axios';

export default function Register() {
  const [userData, setUserData] = useState('');

  const handleOnClick = (e) => {
    e.preventDefault();
    if (register() === true) {
      toast.success('Registration successful!');
      //redirect pe login
    }
    toast.error('Register not successful! Please check input data');
  };

  const register = async () => {
    const object = {
      firstName: 'nae2',
      lastName: 'tot nae2',
      email: 'nae email2',
      password: 'parola lui nae2',
      username: 'userul lui nae2',
    };
    let res = await axiosSpring.post('/register', object);

    if (res.status === 200 && res.data) {
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
