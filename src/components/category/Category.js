import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.css";

const Category = ({

  strCategory,
  strCategoryThumb,

}) => {
  return (
    <div className="card-category">
      <Link className="" to={`/meals/${strCategory}`} >
        <h3 className="text-card-category">{strCategory}</h3>
      </Link>
      <img className="photo-category" src={strCategoryThumb} alt={strCategory} />
    </div>
  );
};

export default Category;
