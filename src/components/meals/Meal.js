import React from "react";
import {Link} from "react-router-dom";
import "./Meal.css"

const Meal = ({idMeal, strMeal, strMealThumb, price, handleAddToFav, handleAddToCart}) => {


    return (
        <>
            <div className='meal'>
                <div className='text-meal'>
                    <Link to={`/meal/${idMeal}`}>
                        <h3>{strMeal}</h3>
                    </Link>
                </div>
                <div>
                    <div className="price-add-meal">
                        <img className='photo' src={strMealThumb} alt={strMeal}/>
                        <p className="price">${price}</p>
                        <div>
                            <button className="btn-meal" onClick={() => handleAddToFav(idMeal, price)}> add</button>
                            <button className="btn-addCart" onClick={() => handleAddToCart(idMeal, price)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Meal;
