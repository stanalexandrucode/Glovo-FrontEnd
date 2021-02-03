import React, { useState, useEffect } from 'react';
import { axios, axiosSpring } from '../common/axios';
import FavoriteMeal from './meals/FavoriteMeal';
import Loading from './loading/Loading';

export default function Favorites() {
  const [loading, setLoading] = useState(true);
  const [mealsDb, setMealsDb] = useState([]);
  const [mealsApi, setMealsApi] = useState([]);

  const getFavoritesMealsDb = async () => {
    const response = await axiosSpring
      .get(`/favorites`)
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setMealsDb(response.data);
      return response.data;
    }
  };

  const getMealsApi = async (meals) => {
    let dataApi = [];
    for (var i = 0; i < meals.length; i++) {
      const response = await axios.get(`/lookup.php?i=${meals[i].id}`);
      if (response && response.data) {
        dataApi.push(response.data.meals[0]);
      }
    }
    setMealsApi(dataApi);
  };

  const showMeals = async () => {
    setLoading(true);
    let meals = await getFavoritesMealsDb();
    console.log(meals)
    await getMealsApi(meals);
    setLoading(false);
  };

  useEffect(() => {
    showMeals();
  }, []);

  const handleDelete = async (id) => {
    let removeMealDbById = mealsApi.filter((meal) => meal.idMeal !== id);
    await axiosSpring.delete(`/favorites/${id}`);
    setMealsApi(removeMealDbById);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className="">
        <div>
          <h3 className="">My favorites</h3>
        </div>
        <div className="">
          {mealsApi.map((product) => {
            return (
              <FavoriteMeal
                key={product.idMeal}
                handleDelete={handleDelete}
                {...product}
                price={
                  mealsDb.filter((price) => {
                    return price.id === parseInt(product.idMeal);
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
