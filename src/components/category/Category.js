import React from "react";
import { Link } from "react-router-dom";
import Meals from "../meals/Meals";

const Category = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  return (
    
    <div>
      <Link className="" to={`/meals/${strCategory}`} >
        <h3>{strCategory}</h3>
      </Link>
      <img src={strCategoryThumb} alt={strCategory} />
      <p>Description {strCategoryDescription}</p>
    </div>
  );
};

export default Category;
