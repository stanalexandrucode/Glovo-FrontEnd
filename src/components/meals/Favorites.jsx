import React, { useState, useEffect } from 'react';
import { axios, axiosSpring } from '../../common/axios';
import FavoriteMeal from './FavoriteMeal';
import Cookies from 'js-cookie';
import NotFound from '../NotFound';

export default function Favorites() {
  const [mealsDb, setMealsDb] = useState([]);
  const [mealsApi, setMealsApi] = useState([]);
  const [token, setToken] = useState('');
  const [notFound, setNotFound] = useState(true);

  const getFavoritesMealsDb = async () => {
    const response = await axiosSpring
      .get(`/favorites`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
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
    let meals = await getFavoritesMealsDb();
    await getMealsApi(meals);
  };

  useEffect(() => {
    setToken(Cookies.get('token'));

    if (token && token !== '') {
      setNotFound(false);
      showMeals();
    }
  }, [token]);

  const handleDelete = async (id) => {
    let removeMealDbById = mealsApi.filter((meal) => meal.idMeal !== id);
    await axiosSpring.delete(`/favorites/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    setMealsApi(removeMealDbById);
  };

  if (notFound) {
    return (
      <main>
        <NotFound />
      </main>
    );
  } else {
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
}
