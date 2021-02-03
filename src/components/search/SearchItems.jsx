import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios, axiosSpring } from '../../common/axios';

import Meal from '../meals/Meal';
// import PageLoader from '../loading/Loading';

export default function SearchItems() {
  const [loading, setLoading] = useState(true);
  const [mealsByIngredient, setMealsByIngredient] = useState();
  const [mealPrices, setMealPrices] = useState();
  const [favorite, setFavorite] = useState();

  const param = useParams();
  const ingredient = param.mainIngredient;

  const getMealsApi = async () => {
    const response = await axios
      .get(`/filter.php?i=${ingredient}`)
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setMealsByIngredient(response.data.meals);
    }
  };

  const getMealPrices = async () => {
    const response = await axiosSpring
      .get('/prices')
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setMealPrices(response.data);
    }
  };

  const handleAdd = async (id, price) => {
    let res = await axiosSpring.post('/favorites', {
      id: `${id}`,
      price: `${price}`,
    });
    if (res.status !== 200) {
      console.log(favorite);
    }
    setFavorite({ id: id, price: price });
  };

  const matchingPrices = async () => {
    setLoading(true);
    await getMealsApi();
    await getMealPrices();
    setLoading(false);
  };

  useEffect(() => {
    matchingPrices();
  }, []);

  if (loading) {
    return (
      <main>
        <loading />
      </main>
    );
  }

  return (
    <>
      <div className="category-meals">
        <h2>Selections having {ingredient}</h2>
        <div className="meals-category">
          {mealsByIngredient.map((meal) => {
            return (
              <Meal
                key={meal.idMeal}
                handleAdd={handleAdd}
                {...meal}
                price={
                  mealPrices.filter((price) => {
                    return price.id === parseInt(meal.idMeal);
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
