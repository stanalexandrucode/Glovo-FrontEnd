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
      <div className='favorite-meal'>
        <div className='header-detailMeal'>
          <Link className='text-name-favorite-meal' to={`/meal/${idMeal}`}>
            <h3>{strMeal}</h3>
          </Link>
        </div>
  
          <div>
            <img className='photo-meal' src={strMealThumb} alt={strMeal} />
            <p className="price">${price}</p>
            <div>
              <button className='btn-primary' onClick={()=>handleDelete(idMeal)}>
                remove
              </button>
            </div>
          </div>
     
      </div>
    </>
  );
};

export default FavoriteMeal;
