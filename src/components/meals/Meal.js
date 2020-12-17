import React, {useState} from "react";
import {axiosSpring} from "../../common/axios";
import {Link} from "react-router-dom";

const Meal = ({idMeal, strMeal, strMealThumb, inFavorites, price}) => {
    const [addedToFav, setAddedToFav] = useState(inFavorites);

    const handleAdd = async () => {
        const object = {
            name: `${strMeal}`,
            id: `${idMeal}`,
            thumbnail: `${strMealThumb}`,
            price: `${price}`
        };
        let res = await axiosSpring.post("/favorites", object);
        if (res.status === 200) {
            setAddedToFav(true);
        }
    };

    const handleDelete = async () => {
        let res = await axiosSpring.delete(`/favorites/${idMeal}`);
        window.location.reload();
        if (res.status === 200) {
            setAddedToFav(false);
        }
    }

    return (
        <>
            <Link className="" to={`/meal/${idMeal}`}>
                <h3>{strMeal}</h3>
            </Link>
            <img src={strMealThumb} alt={strMeal}/>
            <p>${price}</p>
            <div>
                {!addedToFav ?
                    <button className="btn-primary" onClick={handleAdd}> add</button>
                    :
                    <button className="btn-primary" onClick={handleDelete}>remove</button>}
            </div>
        </>
    );
};

export default Meal;
