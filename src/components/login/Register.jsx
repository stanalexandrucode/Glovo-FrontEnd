import React, { useState, useEffect,containerRef, useRef } from 'react';
import loginImg from '../../logo.png';
import { toast } from 'react-toastify';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { axiosSpring } from '../../common/axios';
import { Link } from 'react-router-dom';
import './Style.scss';


export default function Register() {
  const [error, setError] = useState('');
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    register();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      toast.error('Passwords do not match');
    }
  };

  const register = async () => {
    const object = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      username: usernameRef.current.value,
    };

    let res = await axiosSpring.post('/register', object);
    if (res.status === 200 && res.data) {
      setError('');
      window.location.href = 'http://localhost:3000/login';
      toast.success('Registration successful!');
      return true;
    }
    toast.error('Register not successful! Please check input data');
    return false;
  };


   
    return (
      <Card className='base-container' ref={containerRef}>
         <Card.Body>
         <div className='header'>Register</div>
       {error && <Alert variant="danger">{error}</Alert>}
       <Form className="form" onSubmit={handleSubmit}>
        {/* <div className='header'>Register</div> */}
     
        <div className="form-group">
            <Form.Group id="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" ref={firstNameRef} required />
            </Form.Group>
            </div>
            <div className="form-group">
            <Form.Group id="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" ref={lastNameRef} required />
            </Form.Group>
            </div>
            <div className="form-group">
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" ref={usernameRef} required />
            </Form.Group>
            </div>
            <div className="form-group">
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            </div>
            <div className="form-group">
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
           </div>
           <div className="form-group">
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
           </div>
            <Button className="btn" type="submit">
              Register
            </Button>
        </Form>
        </Card.Body>
      </Card>
    );
  }



