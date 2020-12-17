import React, {useEffect, useState} from 'react';
import {axios} from "../../common/axios";
import Loading from "../loading/Loading";

const Meals = () => {
    const [loading, setLoading] = useState(true);
    const [categoriesApi, setCategoriesApi] = useState();


    const getMealsApi = async () => {
        setLoading(true)
        const response = await axios.get('/filter.php?c=Seafood').catch((err) => console.log("Error:", err))
        if (response && response.data) {
            setCategoriesApi(response.data.categories)
            setTimeout(() => {
                setLoading(false)
            }, 1300)
        }


    }
    useEffect(() => {
        getMealsApi();
    }, [])

    if (loading) {
        return (
            <main>
                <Loading/>
            </main>)
    }
    return (
        <div>
            
        </div>
    );
};

export default Meals;