import React, {useEffect, useState} from 'react';
import {axios} from "../../common/axios";
import Loading from "../loading/Loading";
import Meal from "./Meal";

const Meals = () => {
    const [loading, setLoading] = useState(true);
    const [mealsApi, setMealsApi] = useState();


    const getMealsApi = async () => {
        setLoading(true)
        const response = await axios.get('/filter.php?c=Seafood').catch((err) => console.log("Error:", err))
        if (response && response.data) {
            setMealsApi(response.data.meals)
            setTimeout(() => {
                setLoading(false)
            }, 1300)
        }


    }
    useEffect(() => {
        getMealsApi();
    }, [])

    if (loading) {
        return (
            <main>
                <Loading/>
            </main>)
    }
    return (
        <>
            <h3>Seafood</h3>
            <div>
                {mealsApi.map((meal) => {
                    return <Meal key={meal.idMeal} {...meal}/>
                })}
            </div>
        </>
    );
};

export default Meals;