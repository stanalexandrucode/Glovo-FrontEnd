import React from "react";

const Meal = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <>
      <h3>{strMeal}</h3>
      <img src={strMealThumb} alt={strMeal} />
      <button className="btn-primary" >Add</button>
    </>
  );
};

export default Meal;
