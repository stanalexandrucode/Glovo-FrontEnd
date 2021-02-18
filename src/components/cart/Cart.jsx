import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, containerRef } from 'react';
import { axios, axiosSpring } from '../../common/axios';
import Cookies from 'js-cookie';
import './Details.css';
import './Cart.css';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [mealsApi, setMealsApi] = useState([]);
  const [total, setTotal] = useState([]);

  const getCartMealsDb = async () => {
    const response = await axiosSpring
      .get('/cart', {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token'),
        },
      })
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setCart(response.data);
      console.log('cart', cart);
      return response.data;
    }
  };

  const getMealsApi = async () => {
    let dataApi = [];
    for (let i = 0; i < cart.length; i++) {
      console.log('meal  ', cart[i]);
      const response = await axios
        .get(`/lookup.php?i=${cart[i].mealId}`)
        .catch((err) => console.log('Error:', err));
      if (response && response.data) {
        console.log(37, response.data.meals[0]);
        dataApi.push(response.data.meals[0]);
      }
    }
    setMealsApi(dataApi);
  };

  const showMeals = async () => {
    let meals = await getCartMealsDb();
    await getMealsApi(meals);
  };

  const reduction = () => {
    'msg';
    console.log('reductiion');
  };
  const increase = () => {
    'msg';
    console.log('increase');
  };

  const removeProduct = () => {
    'msg';
    console.log('remove');
  };

  // const filterForPrice = (mealIds) => {
  //   return cart.filter((i) => i.price);
  // };

  useEffect(() => {
    showMeals();

  }, [total]);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>No Product</h2>;
  } else {
    return (
      <>
        {mealsApi.map((item) => (
          <div className="details cart" key={item.idMeal}>
            <div style={{ color: 'red' }}>{}</div>
            <img src={item.strMealThumb} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.strMeal}</h2>
                <span>
                  {cart.filter((cartItem) => {
                    return cartItem.mealId == item.idMeal;
                  })[0].price * cart.filter((cartItem) => {
                    return cartItem.mealId == item.idMeal;
                  })[0].quantity}
                </span>
              </div>

              <p>
                Category: <b>{item.strCategory}</b>
              </p>
              <p>
                Cuisine: <b>{item.strArea}</b>
              </p>
              <div className="amount">
                <button
                  className="count"
                  onClick={() => reduction(cart.filter((cartItem) => {
                    return cartItem.mealId == item.idMeal;
                  })[0].quantity)}
                >
                  {' '}
                  -{' '}
                </button>
                <span>{cart.filter((cartItem) => {
                    return cartItem.mealId == item.idMeal;
                  })[0].quantity}</span>
                <button
                  className="count"
                  onClick={() => increase(cart.filter((cartItem) => {
                    return cartItem.mealId == item.idMeal;
                  })[0].quantity)}
                >
                  {' '}
                  +{' '}
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item.mealId)}>
              X
            </div>
          </div>
        ))}
        <div className="total">
          <Link to="/payment">Payment</Link>
          <h3>Total: ${total}</h3>
        </div>
      </>
    );
  }
}
