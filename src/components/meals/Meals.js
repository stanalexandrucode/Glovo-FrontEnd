import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios, axiosSpring } from '../../common/axios';
import Loading from '../loading/Loading';
import Meal from './Meal';


const Meals = () => {
  const [loading, setLoading] = useState(true);
  const [mealsApi, setMealsApi] = useState();
  const [mealPrices, setMealPrices] = useState();
  const [favorite, setFavorite] = useState();

  const param = useParams();
  const category = param.strCategory;

  const getMealsApi = async () => {
    const response = await axios
      .get(`/filter.php?c=${category}`)
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setMealsApi(response.data.meals);
    }
  };

  const getMealPrices = async () => {
    const response = await axiosSpring
      .get('/prices')
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      console.log('listapreturi', response);
      setMealPrices(response.data);
    }
  };

  const handleAdd = async (id, price) => {
    let res = await axiosSpring.post('/favorites', {
      id: `${id}`,
      price: `${price}`,
    });
    if (res.status !== 200) {
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
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className="category-meals">
        <h2 >{category}</h2>
        <div className="meals-category">
          {mealsApi.map((meal) => {
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
};

export default Meals;
