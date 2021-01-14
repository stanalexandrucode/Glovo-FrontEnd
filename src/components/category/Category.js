import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Category = ({
                      idCategory,
                      strCategory,
                      strCategoryThumb,
                      strCategoryDescription,
                  }) => {
    const [readMore, setReadMore] = useState(false)

    return (
        <div className="card-category">
            <Link className="category-meals" to={`/meals/${strCategory}`}>
                <h3 className="text-category">{strCategory}</h3>
            </Link>
            <img src={strCategoryThumb} alt={strCategory}/>
            <p>{readMore ? strCategoryDescription : `${strCategoryDescription.substring(0, 200)}...`}
                {strCategoryDescription.length > 200 &&
                <button className="showBtn" onClick={() => setReadMore(!readMore)}>
                    {readMore ? "show less" : "read more"}
                </button>}

            </p>
        </div>
    );
};

export default Category;
