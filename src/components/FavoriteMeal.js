import React from 'react';
import {Link} from "react-router-dom";

const FavoriteMeal = ({idMeal, strMeal, strMealThumb, inFavorites, price, handleDelete}) => {


    return (
        <>
            <div className='container-meal'>
                <div className='header-detailMeal'>
                    <Link className='text-name-meal' to={`/meal/${idMeal}`}>
                        <h3>{strMeal}</h3>
                    </Link>
                </div>
                <div>
                    <div>
                        <img className='photo' src={strMealThumb} alt={strMeal}/>
                        <p>${price}</p>
                        <button className="btn-primary" onClick={handleDelete}>remove</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FavoriteMeal;