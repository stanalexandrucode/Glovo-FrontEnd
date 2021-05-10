import React from 'react'
import {Link} from "react-router-dom";


const RandomMeal = ({
                        idMeal,
                        strMeal,
                        strMealThumb,
                        randomMealIndex,
                        index,
                        randomMealCaruselLenght
                    }) => {

    let position = 'nextSlide'
    if (randomMealIndex === index) {
        position = 'activeSlide'
    }
    if (
        randomMealIndex === index - 1 ||
        (index === 0 && randomMealIndex === randomMealCaruselLenght - 1)
    ) {
        position = 'lastSlide'
    }

    return (
        <article className={position}>
            <Link className='text-name-meal' to={`/meal/${idMeal}`}>
                <img src={strMealThumb} alt={strMeal} className='person-img'/>
            </Link>
            <h4>{strMeal}</h4>
        </article>
    )


}
export default RandomMeal