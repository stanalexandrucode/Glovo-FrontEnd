import React, { useState, useEffect } from 'react'
import { axiosSpring } from '../common/axios';

export default function Favorites() {

  const [loading, setLoading] = useState(true);
  const [mealsApi, setMealsApi] = useState();

  const getFavoritesMealsApi = async () => {
    setLoading(true);
    const response = await axiosSpring
      .get(`/favorites`)
      .catch((err) => console.log("Error:", err));
    if (response && response.data) {
    //   setMealsApi(response.data.meals);
    console.log(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
  };
  useEffect(() => {
    getFavoritesMealsApi();
  }, []);

    return (
        <div>
            
        </div>
    )
}


/**
 * import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "../../common/axios";
import Loading from "../loading/Loading";
import Meal from "./Meal";

const Meals = () => {
  const [loading, setLoading] = useState(true);
  const [mealsApi, setMealsApi] = useState();

  const param = useParams();
  const category = param.strCategory;

  const getMealsApi = async () => {
    setLoading(true);
    const response = await axios
      .get(`/filter.php?c=${category}`)
      .catch((err) => console.log("Error:", err));
    if (response && response.data) {
      setMealsApi(response.data.meals);
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
  };
  useEffect(() => {
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
      <h3>{category}</h3>
      <div>
        {mealsApi.map((meal) => {
          return <Meal key={meal.idMeal} {...meal} />;
        })}
      </div>
    </>
  );
};

export default Meals;

 */