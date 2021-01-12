import React, { useState, useEffect } from 'react';
import { axios, axiosSpring } from '../common/axios';
import Meal from './meals/Meal';
import Loading from './loading/Loading';

export default function Favorites() {
  const [loading, setLoading] = useState(true);
  const [mealsApi, setMealsApi] = useState([]);
  const [mealsDb, setMealsDb] = useState();

  const getFavoritesMealsDb = async () => {
    setLoading(true);
    const response = await axiosSpring
      .get(`/favorites`)
      .catch((err) => console.log('Error:', err));
    console.log('favorite', response);
    if (response && response.data) {
      setMealsDb(response.data);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const getMealsApi = async () => {
    setLoading(true);

    var dataApi = [];

    for (const i in mealsDb) {
      const response = await axios(`/lookup.php?i=${mealsDb[i].id}`);

      dataApi.push(response.data.meals[0]);
      console.log('data api', dataApi);

      if (response && response.data) {
        setMealsApi(dataApi);
        console.log('object', dataApi);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    getFavoritesMealsDb();
    getMealsApi();
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
      <div>
        {mealsApi.map((product) => {
          return (
            <Meal
              key={product.id}
              idMeal={product.id}
              strMeal={product.strMeal}
              strMealThumb={product.strMealThumb}
              price={product.price}
              inFavorites={true}
            />
          );
        })}
      </div>
    </>
  );
}
