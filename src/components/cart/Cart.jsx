import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { axios, axiosSpring } from '../../common/axios';
import Cookies from '../../../node_modules/js-cookie';
import './Details.css';
import './Cart.css';
import { toast } from 'react-toastify';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [mealsApi, setMealsApi] = useState([]);
  const [total, setTotal] = useState();

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
    await getCartMealsDb();
    await getMealsApi();
    getTotal();
  };

  const updateCart = async (mealId, direction) => {
    const response = await axiosSpring
      .put(`/cart/${direction}/${mealId}`, mealId, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token'),
        },
      })
      .catch((err) => console.log('Error:', err));
    if (response.status === 200) {
      return 'ok';
    } else {
      toast.error('Check connection with the server');
    }
  };

  const reduction = async (mealId) => {
    const update = await updateCart(mealId, 'decrease');
    if (update === 'ok') {
      const newCart = cart.map((item) => {
        if (parseInt(item.mealId) === mealId) {
          //de rezolvat situatia unui produs cu cantitate 0
          item.quantity--;
        }
        return item;
      });
      setCart(newCart);
      showMeals();
    }
  };

  const increase = async (mealId) => {
    const update = await updateCart(mealId, 'increase');
    if (update === 'ok') {
      const newCart = cart.map((item) => {
        if (parseInt(item.mealId) === mealId) {
          item.quantity++;
        }
        return item;
      });
      setCart(newCart);
      showMeals();
    }
  };

  const removeProduct = async (mealId) => {
    const newCart = cart.filter((item) => item.mealId !== mealId);
    const response = await axiosSpring
      .delete(`/cart/delete-meal/${mealId}`, {
        headers: {
          Authorization: 'Bearer ' + Cookies.get('token'),
        },
      })
      .catch((err) => console.log('Error:', err));
    if (response.status === 200) {
      setCart(newCart);
      window.location.reload(); //f urat trebuie rezolvata mai elegant
    }
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
    return <h2 style={{ textAlign: 'center' }}>The cart is empty</h2>;
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
                  onClick={() => reduction(item.idMeal)}
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
                <button className="count" onClick={() => increase(item.idMeal)}>
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
