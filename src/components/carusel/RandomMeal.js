import React from 'react'


const RandomMeal = ({
                        // idMeal,
                        strMeal,
                        // strCategory,
                        // strArea,
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
            <img src={strMealThumb} alt={strMeal} className='person-img'/>
            <h4>{strMeal}</h4>
        </article>
    )

}
export default RandomMeal