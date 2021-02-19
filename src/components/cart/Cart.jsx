import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, containerRef } from 'react';
import { axios, axiosSpring } from '../../common/axios';
import Cookies from 'js-cookie';
import './Details.css';
import './Cart.css';
import { toast } from 'react-toastify';

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
      return response.data;
    }
  };

  const getMealsApi = async () => {
    let dataApi = [];
    for (let i = 0; i < cart.length; i++) {
      const response = await axios
        .get(`/lookup.php?i=${cart[i].mealId}`)
        .catch((err) => console.log('Error:', err));
      if (response && response.data) {
        dataApi.push(response.data.meals[0]);
      }
    }
    setMealsApi(dataApi);
  };

  const showMeals = async () => {
    let meals = await getCartMealsDb();
    await getMealsApi(meals);
    getTotal();
  };

  const reduction = () => {
    'msg';
    console.log('reduction');
  };
  const increase = () => {
    'msg';
    console.log('increase');
  };

  const removeProduct = async (mealId) => {
    const response = await axiosSpring
      .delete(`/cart/delete-meal/${mealId}`, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token'),
        },
      })
      .catch((err) => console.log('Error:', err));
    if (response.status === 200) {
      toast.success('Delete successful!');
      const newCart = cart.filter((item) => {
        return item.mealId !== mealId;
      });
      setCart(newCart);
    }
    toast.error('Not Deleted');
  };

  const getTotal = () => {
    let sum = cart
      .map((cartItem) => cartItem.price * cartItem.quantity)
      .reduce((a, b) => a + b, 0);
    setTotal(sum);
  };

  useEffect(() => {
    showMeals();
  }, [total]);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>No Product</h2>;
  } else {
    return (
      <section className="cart-box">
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
                  })[0].price *
                    cart.filter((cartItem) => {
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
                  onClick={() =>
                    reduction(
                      cart.filter((cartItem) => {
                        return cartItem.mealId == item.idMeal;
                      })[0].quantity
                    )
                  }
                >
                  {' '}
                  -{' '}
                </button>
                <span>
                  {
                    cart.filter((cartItem) => {
                      return cartItem.mealId == item.idMeal;
                    })[0].quantity
                  }
                </span>
                <button
                  className="count"
                  onClick={() =>
                    increase(
                      cart.filter((cartItem) => {
                        return cartItem.mealId == item.idMeal;
                      })[0].quantity
                    )
                  }
                >
                  {' '}
                  +{' '}
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item.idMeal)}>
              X
            </div>
          </div>
        ))}
        <div className="details cart">
          <div className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: ${total}</h3>
          </div>
        </div>
      </section>
    );
  }
}
