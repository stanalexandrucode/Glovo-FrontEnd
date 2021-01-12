import React, {useState, useEffect} from "react";
import {axiosSpring} from "../common/axios";
import Meal from "./meals/Meal";
import Loading from "./loading/Loading";

export default function Favorites() {
    const [loading, setLoading] = useState(true);
    const [mealsDb, setMealsDb] = useState();

    const getFavoritesMealsDb = async () => {
        setLoading(true);
        const response = await axiosSpring
            .get(`/favorites`)
            .catch((err) => console.log("Error:", err));
        if (response && response.data) {
            setMealsDb(response.data);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    useEffect(() => {
        getFavoritesMealsDb();
    }, []);

    if (loading) {
        return (
            <main>
                <Loading/>
            </main>
        );
    }

    return (
        <>
            <div>
                {mealsDb.map((product) => {
                    return (
                        <Meal
                            key={product.id}
                            idMeal={product.id}
                            strMeal={product.name}
                            strMealThumb={product.thumbnail}
                            price={product.price}
                            inFavorites={true}
                        />
                    );
                })}
            </div>
        </>
    );
}
