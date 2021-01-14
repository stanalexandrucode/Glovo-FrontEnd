import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  return (
    <div className="card-category">
      <Link className="category-meals" to={`/meals/${strCategory}`}>
        <h3 className="text-category">{strCategory}</h3>
      </Link>
      <img
        className="photo-category"
        src={strCategoryThumb}
        alt={strCategory}
      />
      {/* <p>Description {strCategoryDescription}</p> */}
    </div>
  );
};

export default Category;
