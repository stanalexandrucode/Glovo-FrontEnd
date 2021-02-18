import React, { useState, containerRef, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { axiosSpring } from '../../common/axios';
import Cookies from 'js-cookie';
import loginImg from '../../logo.png';
import './Style.scss';

const Login = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

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
    console.log(res)

    if (res.status === 200 && res.data) {
      setError('');
    
      toast.success('Hi, ' + res.data.name + ' !');
      Cookies.set('token', res.data.token);
      history.push('/');
      return true;
    } else {
      toast.error('Login not successful! Please check input data');
      Cookies.remove('token', 'slide');
      return false;
    }
  };

  return (
    <Card className="base-container" ref={containerRef}>
      <Card.Body>
        <div className="header">Login</div>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group id="text">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <Button className="btn" type="submit">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
