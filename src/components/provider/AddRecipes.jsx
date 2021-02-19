import React,{useRef, containerRef, useState} from 'react';
import { toast } from 'react-toastify';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { axiosSpring } from '../../common/axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './StyleProvider.scss'

export default function AddRecipes() {

    const [error, setError] = useState('');
    const recipeNameRef = useRef();
    const descriptionRef = useRef();
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
      register();

    };
  
    const register = async () => {
      const object = {
        name: recipeNameRef.current.value,
        description:  descriptionRef.current.value,
      };
  
      let res = await axiosSpring.post('/recipes/addRecipe', object,{
          headers:{
              Authorization:'Bearer '+ Cookies.get('token')
          }
      });
       console.log("res",res)
      if (res.status === 201) {
        setError('')
        toast.success('Recipe was added!');
        // window.location.href = 'http://localhost:3000';
        return true;
      }
      toast.error('Try again');
      return false;
    };



  return (
    <div>
      <Card className="recipe" ref={containerRef}>
        <Card.Body>
          <div className='header-recipe'>Recipe</div>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <Form.Group id='name'>
                <Form.Label> Recipe Name</Form.Label>
                <Form.Control type='text' ref={recipeNameRef} required />
              </Form.Group>
            </div>
            <Form.Label>Description</Form.Label>
            <textarea className='form-group' type='textarea' ref={descriptionRef} required >
        
            </textarea>
           
            <Button className='btn' type='submit'>
              Add recipe
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
