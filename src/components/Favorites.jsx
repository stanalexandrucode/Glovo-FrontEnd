import React, { useState, useEffect } from 'react';
import { axios, axiosSpring } from '../common/axios';
import FavoriteMeal from './meals/FavoriteMeal';
import Loading from './loading/Loading';

export default function Favorites() {
  const [loading, setLoading] = useState(true);
  const [mealsApi, setMealsApi] = useState([]);
  const [mealsDb, setMealsDb] = useState([]);

  const getFavoritesMealsDb = async () => {
    const response = await axiosSpring
      .get(`/favorites`)
      .catch((err) => console.log('Error:', err));
    console.log('favorite', response);
    if (response && response.data) {
      setMealsDb(response.data);
      console.log('date din db', response.data);
    }
  };

  const getMealsApi = async () => {
    console.log('function2');
    let dataApi = [];
    console.log('after empty list', dataApi);
    for (var i = 0; i < mealsDb.length; i++) {
      console.log('get mealDB id', mealsDb[i].id);
      const response = await axios.get(`/lookup.php?i=${mealsDb[i].id}`);
      console.log('response ', response);
      dataApi.push(response.data.meals[0]);
      console.log('data api', dataApi);

      if (response && response.data) {
        setMealsApi(dataApi);
        console.log('mealsApi', mealsApi);
      }
    }
  };

  const showMeals = async () => {
    setLoading(true);
    await getFavoritesMealsDb();
    console.log('between methods');
    await getMealsApi();
    console.log('after both functions');
    setLoading(false);
  };

  useEffect(() => {
    showMeals();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className="favorites-meals">
        <h3 className="text-name-category">My favorites</h3>
        {mealsApi.map((product) => {
          return (
          
            <FavoriteMeal
              key={product.id}
              idMeal={product.idMeal}
              strMeal={product.strMeal}
              strMealThumb={product.strMealThumb}
              price={
                mealsDb.filter((price) => {
                  return price.id === parseInt(product.idMeal);
                })[0].price
              } 
            />
          );
        })}
      </div>
    </>
  );
}
