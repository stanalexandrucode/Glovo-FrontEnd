import React from "react";
import {Link} from "react-router-dom";

const Meal = ({idMeal, strMeal, strMealThumb, price, handleAdd}) => {


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
                        <p className="price">${price}</p>
                        <div>
                            <button className="btn-primary" onClick={() => handleAdd(idMeal, price)}> add</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Meal;
