import React, {
  useState,
  useEffect,
  containerRef,
  useRef,
  useContext,
} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { axiosSpring } from '../../common/axios';
import Cookies from 'js-cookie';
import loginImg from '../../logo.png';
import './Style.scss';

const Login = () => {
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

    if (res.status === 200 && res.data) {
      setError('');
      toast.success('Hi, ' + res.data.name + ' !');
      window.location.href = '/';
      Cookies.set('token', res.data.token);
      return true;
    } else {
      toast.error('Login not successful! Please check input data');
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
