import React from 'react';
import Category from "./Category";

const Categories = ({categoriesApi}) => {
    return (
        <section>
            <div className='title'>
                <h2>Menu</h2>
                <div>
                    {categoriesApi.map((category) => {
                        return <Category key={category.idCategory} {...category}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;