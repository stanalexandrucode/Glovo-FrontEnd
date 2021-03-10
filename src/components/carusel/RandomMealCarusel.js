import React from 'react'
import RandomMeal from "./RandomMeal";


const RandomMealCarusel = ({randomMealCarusel, index}) => {
    let randomMealCaruselLenght = randomMealCarusel.length // 4 daca nu merge
    return (
        <>
            {randomMealCarusel.map((randomMeal, randomMealIndex) => {
                return (
                    <RandomMeal
                        key={randomMeal.idMeal}
                        {...randomMeal}
                        index={index}
                        randomMealIndex={randomMealIndex}
                        randomMealCaruselLenght={randomMealCaruselLenght}/>
                )
            })}
        </>
    )
}
export default RandomMealCarusel