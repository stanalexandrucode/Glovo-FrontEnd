import React, { useEffect, useState } from "react";
import { axiosSpring } from "../../common/axios";

const Meal = ({ idMeal, strMeal, strMealThumb, inFavorites }) => {
  const [addedToFav, setAddedToFav] = useState(inFavorites);

  useEffect(() => {
    console.log("schimb culorile cu style");
  }, [addedToFav]);

  const handleAddAndRemoveToFavorites = async () => {
    const object = {
      name: `${strMeal}`,
      id: `${idMeal}`,
      thumbnail: `${strMealThumb}`,
    };
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
      <button className="btn-primary" onClick={handleAddAndRemoveToFavorites}>
        {addedToFav ? "remove" : "add"}
      </button>
    </>
  );
};

export default Meal;
