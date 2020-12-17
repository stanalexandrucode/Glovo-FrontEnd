import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ idMeal, strMeal, strMealThumb, strCategory }) => {
  return (
    <>
      <div>
        <Link className='' to={`/meal/${idMeal}`}>
          <h3>{strMeal}</h3>
        </Link>
        <img src={strMealThumb} alt={strMeal} />
        <button className='btn-primary'>Add</button>
      </div>
    </>
  );
};

export default Meal;
