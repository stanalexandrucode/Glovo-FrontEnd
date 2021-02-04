import React from "react";
import {Link} from "react-router-dom";
import "./Meal.css"

const Meal = ({idMeal, strMeal, strMealThumb, price, handleAdd}) => {


    return (
        <>
            <div className='meal'>
                <div className='text-name-favorite-meal'>
                    <Link to={`/meal/${idMeal}`}>
                        <h3>{strMeal}</h3>
                    </Link>
                </div>
                <div>
                    <div className="price-add-meal">
                        <img className='photo' src={strMealThumb} alt={strMeal}/>
                        <p className="price">${price}</p>
                        <div>
                            <button className="btn-meal" onClick={() => handleAdd(idMeal, price)}> add</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Meal;
