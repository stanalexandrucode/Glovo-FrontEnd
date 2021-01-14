import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from './AuthContext';
import Cookies from 'js-cookie';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { axiosSpring } from '../../common/axios';

const Login = () => {
  const [error, setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  const { authorization } = useContext(AuthContext);
  const [auth, setAuth] = authorization;

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    const object = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    let res = await axiosSpring.post('/login', object);
    if (res.status === 200 && res.data) {
      setError('');
      window.location.href = 'http://localhost:3000/';
      setAuth(true);
      Cookies.set('user', res.data);
      // setUser(res.data)
      return true;
    } else {
      toast.error('Login not successful! Please check input data');
      return false;
    }
  };

  return (
    <>
      <Card className="register-form">
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
