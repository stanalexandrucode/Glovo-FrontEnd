import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { axios } from '../../common/axios';
import Loading from '../loading/Loading';

const DetailMeal = () => {
  const [loading, setLoading] = useState(true);
  const [detailMealApi, setDetailMealApi] = useState();

  const param = useParams();

  const getDetailMealApi = async () => {
    setLoading(true);
    const response = await axios
      .get(`/lookup.php?i=${param.id}`)
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setDetailMealApi(response.data.meals);
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
  };
  useEffect(() => {
    getDetailMealApi();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <article>
      <div>
        {detailMealApi.map((meal) => {
          const { strMeal, strArea, strMealThumb, strInstructions } = meal;

          return (
            <div key={meal.idMeal} className="container">
              <div className="header-detailMeal">
                <div className="underline">
                  <h2>{strMeal}</h2>
                </div>
                <div className="detailMeal-page">
                  <div>
                    <img src={strMealThumb} className="photo" alt={strMeal} />
                  </div>
                  <div>
                    <h5>Instructions:</h5>
                    <p>{strInstructions}</p>
                    <h5>Area food: {strArea}</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default DetailMeal;
