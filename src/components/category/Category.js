import React from 'react';

const Category = ({idCategory,strCategory,strCategoryThumb,strCategoryDescription}) => {
    return (
        <div>
            <h3>{strCategory}</h3>
            <img src={strCategoryThumb} alt={strCategory}/>
            <p>Description {strCategoryDescription}</p>
        </div>
    );
};

export default Category;