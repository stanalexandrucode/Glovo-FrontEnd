import React, {useEffect, useState} from 'react';
import {axios} from '../../common/axios';
import FavoriteMeal from './FavoriteMeal';
import Cookies from 'js-cookie';
import Loading from "../loading/Loading";

export default function Favorites() {
    const [mealsDb, setMealsDb] = useState([]);
    const [mealsApi, setMealsApi] = useState([]);
    const [loading, setLoading] = useState(true);
    let token = Cookies.get('token');


    const getFavoritesMealsDb = async () => {
        let response = await axios({
            method: 'get',
            url: 'http://localhost:8080/favorite',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .catch((err) => console.log('Error:', err));
        if (response && response.data) {
            setMealsDb(response.data);
            return response.data;
        }
    };


    const getMealsApi = async (meals) => {
        let dataApi = [];
        for (let i = 0; i < meals.length; i++) {
            const response = await axios.get(`/lookup.php?i=${meals[i].mealId}`);
            if (response && response.data) {
                dataApi.push(response.data.meals[0]);
            }
        }
        setMealsApi(dataApi);
    };

    const showMeals = async () => {
        setLoading(true)
        let meals = await getFavoritesMealsDb();
        await getMealsApi(meals);
        setLoading(false)
    };

    useEffect(() => {
        showMeals();
    }, []);


    const handleDelete = async (id) => {
        let removeMealDbById = mealsApi.filter((meal) => meal.idMeal !== id);
         await axios({
            method: 'delete',
            url: `http://localhost:8080/favorite/${id}`,
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).catch((err) => console.log('Error:', err));
        setMealsApi(removeMealDbById);
    }


    if (loading) {
        return (
            <Loading/>
        );
    }

    return (
        <>
            <div className="container">
                <div>
                    <h2 className="">My favorites</h2>
                </div>
                <div className="display-categories">
                    {mealsApi.map((product) => {
                        return (
                            <FavoriteMeal
                                key={product.idMeal}
                                handleDelete={handleDelete}
                                {...product}
                                price={
                                    mealsDb.filter((price) => {
                                        return price.mealId === parseInt(product.idMeal);
                                    })[0].price
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
