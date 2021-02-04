import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import './Cart.css';
import { useState, useEffect } from 'react';
import { axios, axiosSpring } from '../../common/axios';


export default function Cart() {
  const [cart, setCart] = useState([]);
  const [mealsApi, setMealsApi] = useState([]);
  const [total, setTotal] = useState([]);

  const getCartMealsDb = async () => {
    const response = await axiosSpring
      .get(`/cart`)
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      console.log(response.data);
      setCart(response.data);
      return response.data;
    }
  };

  const getMealsApi = async (meals) => {
    let dataApi = [];
    for (let i = 0; i < cart.length; i++) {
      const response = await axios.get(`/lookup.php?i=${meals[i].id}`);
      if (response && response.data) {
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
      "msg"
  }
  const increase = () => {
    "msg"
}

const removeProduct = () => {
    "msg"
}
  useEffect(() => {
    showMeals();
  }, []);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Nothing Product</h2>;
  } else {
    return (
      <>
        {cart.map((item) => (
          <div className="details cart" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price * item.count}</span>
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="amount">
                <button className="count" onClick={() => reduction(item._id)}>
                  {' '}
                  -{' '}
                </button>
                <span>{item.count}</span>
                <button className="count" onClick={() => increase(item._id)}>
                  {' '}
                  +{' '}
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item._id)}>
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
