import React from 'react';
import {Link} from 'react-router-dom';


const FavoriteMeal = ({
  idMeal,
  strMeal,
  strMealThumb,
  price,
  handleDelete
}) => {
  
  return (
    
    <>
      <div className='meal'>
        <div className='header-detailMeal'>
          <Link className='text-name-favorite-meal' to={`/meal/${idMeal}`}>
            <h3>{strMeal}</h3>
          </Link>
        </div>
  
          <div>
            <img className='photo' src={strMealThumb} alt={strMeal} />
            <p className="price-add-meal">Price ${price}</p>
            <div>
              <button className='btn-meal-remove' onClick={()=>handleDelete(idMeal)}>
                remove
              </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default FavoriteMeal;
