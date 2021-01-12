import React, { useState } from 'react';
import { axiosSpring } from '../../common/axios';
import { Link } from 'react-router-dom';

const FavoriteMeal = ({
  idMeal,
  strMeal,
  strMealThumb,
  inFavorites,
  price,
}) => {
  

  const handleDelete = async () => {
    let res = await axiosSpring.delete(`/favorites/${idMeal}`);
    window.location.reload();
  };

  return (
    <>
      <div className='favorite-meal'>
        <div className='header-detailMeal'>
          <Link className='text-name-favorite-meal' to={`/meal/${idMeal}`}>
            <h3>{strMeal}</h3>
          </Link>
        </div>
        <div>
          <div>
            <img className='photo-meal' src={strMealThumb} alt={strMeal} />
            <p>${price}</p>
            <div>
              <button className='btn-primary' onClick={handleDelete}>
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteMeal;
