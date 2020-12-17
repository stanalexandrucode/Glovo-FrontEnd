import React, { useEffect, useState } from "react";
import { axiosSpring } from "../../common/axios";

const Meal = ({ idMeal, strMeal, strMealThumb }) => {
  const [addedToFav, setAddedToFav] = useState(false);

  useEffect(() => {
    console.log("schimb culorile cu style");
  }, [addedToFav]);

  const handleAddToFavorites = async () => {
    const object = { name: `${strMeal}`, id: `${idMeal}`, thumbnail: `${strMealThumb}` };
    let res = await axiosSpring.post("/favorites", object);
    if (res.status === 200) {
      setAddedToFav(true);
      console.log("fac butonul rosu - addedToFav se schimba in true");
    }
  };

  return (
    <>
      <h3>{strMeal}</h3>
      <img src={strMealThumb} alt={strMeal} />
      <button className="btn-primary" onClick={handleAddToFavorites}>
        Add
      </button>
    </>
  );
};

export default Meal;
