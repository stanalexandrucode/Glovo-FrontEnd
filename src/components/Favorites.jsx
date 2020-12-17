import React, { useState, useEffect } from "react";
import { axiosSpring } from "../common/axios";
import Meal from "./meals/Meal";

export default function Favorites() {
  const [loading, setLoading] = useState(true);
  const [mealsDb, setMealsDb] = useState();

  const getFavoritesMealsDb = async () => {
    setLoading(true);
    const response = await axiosSpring
      .get(`/favorites`)
      .catch((err) => console.log("Error:", err));
    if (response && response.data) {
      setMealsDb(response.data);
      console.log(response.data.map((product) => product.id));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getFavoritesMealsDb();
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
      <div>
        {mealsDb.map((product) => {
          return (
            <Meal
              key={product.id}
              idMeal={product.id}
              strMeal={product.name}
              strMealThumb={product.thumbnail}
            />
          );
        })}
      </div>
    </>
  );
}
