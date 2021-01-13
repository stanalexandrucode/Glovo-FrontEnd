import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {axios} from '../../common/axios';
import Loading from '../loading/Loading';

const DetailMeal = () => {
    const [loading, setLoading] = useState(true);
    const [detailMealApi, setDetailMealApi] = useState();

    const param = useParams();

    const getDetailMealApi = async () => {
        setLoading(true);
        const response = await axios
            .get(`/lookup.php?i=${param.id}`)
            .catch((err) => console.log("Error:", err));
        if (response && response.data) {
            console.log("ceva", response.data.meals[0]);
            setDetailMealApi(response.data.meals[0]);
            setLoading(false);

        }
    };
    useEffect(() => {
        getDetailMealApi();
    }, []);

    if (loading) {
        return (
            <main>
                <Loading/>
            </main>
        );
    }


    return (
        <div className="container">
            <div className="header-detailMeal">
                <div className="underline">
                    <h2>{detailMealApi.strMeal}</h2>
                </div>
                <div className="detailMeal-page">
                    <div>
                        <img src={detailMealApi.strMealThumb} className="photo" alt={detailMealApi.strMeal}/>
                    </div>
                    <div>
                        <h5>Instructions:</h5>
                        <p>{detailMealApi.strInstructions}</p>
                        <h5>Area food: {detailMealApi.strArea}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMeal;
