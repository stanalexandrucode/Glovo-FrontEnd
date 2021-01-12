import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios, axiosSpring } from '../../common/axios';
import Loading from '../loading/Loading';
import Meal from './Meal';

const Meals = () => {
  const [loading, setLoading] = useState(true);
  const [mealsApi, setMealsApi] = useState();
  const [mealPrices, setMealPrices] = useState();

  const param = useParams();
  const category = param.strCategory;

  const getMealsApi = async () => {
    setLoading(true);
    const response = await axios
      .get(`/filter.php?c=${category}`)
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setMealsApi(response.data.meals);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const getMealPrices = async () => {
    setLoading(true);
    const response = await axiosSpring
      .get('/prices')
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setMealPrices(response.data);
    }
  };

  useEffect(() => {
    getMealsApi();
    getMealPrices();
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
        <h1 className="text-name-category">{category}</h1>
        <div className="meal-page">
          {mealsApi.map((meal) => {
            return (
              <Meal
                key={meal.idMeal}
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
};

export default Meals;
