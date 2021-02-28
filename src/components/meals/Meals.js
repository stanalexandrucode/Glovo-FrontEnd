import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {axios, axiosSpring} from '../../common/axios';
import Meal from './Meal';


import {toast} from 'react-toastify';
import Cookies from 'js-cookie';
import Axios from "axios";

const Meals = () => {

    let token = Cookies.get('token');
    const param = useParams();
    const category = param.strCategory;


    const [data, setData] = useState([])


    const fetchData = () => {
        const api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        const db = `http://localhost:8080/prices`

        const getApiData = Axios.get(api)
        const getPrice = Axios.get(db, {headers: {Authorization: 'Bearer ' + token}})

        Axios.all([getApiData, getPrice]).then(
            Axios.spread((...allData) => {
                const allDataApi = allData[0].data.meals;
                const getDataPrice = allData[1].data;


                const keys = Object.keys(allDataApi);
                let mergedData = keys.map(key => {
                    return {
                        ...allDataApi[key],
                        ...getDataPrice[key],
                        price: getDataPrice[key].price
                    };
                })
                setData(mergedData)
                console.log("data", mergedData);
            })
        )
    }
    useEffect(() => {
        fetchData();
    }, [])

    const handleAdd = async (id, price) => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/favorite/addMeal',
            data: {mealId: id, price: price},
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }).catch((err) => console.log('Error:', err));

    };

    const handleAddToCart = async (id, price) => {
        const object = {
            mealId: `${id}`,
            price: `${price}`,
            quantity: 1,
        };
        let res = await axiosSpring
            .post('/cart/add-meal', object, {
                headers: {
                    Authorization: 'Bearer ' + Cookies.get('token'),
                },
            })
            .catch(() => {
                toast.error();
            });

        if (res.status === 201 && res.data) {
            toast.success('Add successful in Meals!');
        }
        // setCart({ id: id, price: price });
    };


    return (
        <>
            <div className="category-meals">
                <h2>{category}</h2>
                <div className="meals-category">
                    {data.map((meal) => {
                        return (
                            <Meal
                                key={meal.idMeal}
                                handleAddToFav={handleAdd}
                                handleAddToCart={handleAddToCart}
                                {...meal}
                                price={meal.price}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Meals;
