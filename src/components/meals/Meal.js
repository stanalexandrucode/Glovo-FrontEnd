import React from "react";
import {Link} from "react-router-dom";
import "./Meal.css"

const Meal = ({idMeal, strMeal, strMealThumb, price, handleAddToFav, handleAddToCart}) => {


    return (
        <>
            <div className='meal'>
                <div >
                    <Link to={`/meal/${idMeal}`}>
                        <h3 className="text-meal">{strMeal}</h3>
                    </Link>
                </div>
                <div>
                    <div className="price-add-meal">
                        <Link to={`/meal/${idMeal}`}>
                        <img className='photo' src={strMealThumb} alt={strMeal}/>
                        </Link>
                        <p className="price">Price ${price}</p>
                        <div>
                            <button className="btn-meal" onClick={() => handleAddToFav(idMeal, price)}> add fav</button>
                            <button className="btn-addCart" onClick={() => handleAddToCart(idMeal, price)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Meal;
