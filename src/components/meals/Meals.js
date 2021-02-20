import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios, axiosSpring } from '../../common/axios';
import Loading from '../loading/Loading';
import Meal from './Meal';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const Meals = () => {
  const [loading, setLoading] = useState(true);
  const [mealsApi, setMealsApi] = useState();
  const [mealPrices, setMealPrices] = useState();
  const [favorite, setFavorite] = useState();
  let token = Cookies.get('token');

  const param = useParams();
  const category = param.strCategory;

  const getMealsApi = async () => {
    let response = await axios
      .get(`/filter.php?c=${category}`)
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setMealsApi(response.data.meals);
    }
  };

  const getMealPrices = async () => {
    let response = await axios({
      method: 'get',
      url: 'http://localhost:8080/prices',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setMealPrices(response.data);
    }
  };

  const handleAdd = async (id, price) => {
    let res = await axios({
      method: 'post',
      url: 'http://localhost:8080/favorite/addMeal',
      data: { mealId: id, price: price },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).catch((err) => console.log('Error:', err));
    // if (res.status !== 200) {
    // }
    setFavorite({ mealId: id, price: price });
  };

  const handleAddToCart = async (id, price) => {
    const object = {
      mealId: `${id}`,
      price: `${price}`,
      quantity: 1,
    };
    let res = await axiosSpring
      .post('/cart/add-meal', object, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token'),
        },
      })
      .catch(() => {
        toast.error();
      });

    if (res.status === 201 && res.data) {
      toast.success('Add successful in Meals!');
    }
    // setCart({ id: id, price: price });
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
        <h2>{category}</h2>
        <div className="meals-category">
          {mealsApi.map((meal) => {
            return (
              <Meal
                key={meal.idMeal}
                handleAddToFav={handleAdd}
                handleAddToCart={handleAddToCart}
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
