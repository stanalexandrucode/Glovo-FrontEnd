import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios, axiosSpring } from '../../common/axios';
import Loading from '../loading/Loading';
import Cookies from 'js-cookie';


const DetailMeal = () => {
  const [loading, setLoading] = useState(true);
  const [detailMealApi, setDetailMealApi] = useState();
  const [readMore, setReadMore] = useState(false);
  const [mealPrices, setMealPrices] = useState();

  const param = useParams();

  const getDetailMealApi = async () => {
    setLoading(true);
    const response = await axios
      .get(`/lookup.php?i=${param.id}`)
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setDetailMealApi(response.data.meals[0]);
      setLoading(false);
    }
  };

  const getMealPrices = async () => {
    const response = await axiosSpring
      .get('/prices')
      .catch((err) => console.log('Error:', err));
    if (response && response.data) {
      setMealPrices(response.data);
    }
  };

  const handleAdd = async () => {
    await axiosSpring.post('/favorites', {
      id: `${detailMealApi.idMeal}`,
      price: `${prices}`,
    });
  };

  useEffect(() => {
    getDetailMealApi();
    getMealPrices();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  let prices = mealPrices.filter((price) => {
    return price.id === parseInt(detailMealApi.idMeal);
  })[0].price;

  return (
    <div className="detail-mail-container">
      <div className="header-detailMeal">
        <div className="text-name-detail-meal">
          <h3>{detailMealApi.strMeal}</h3>
        </div>
        <div className="detailMeal-page">
          <div>
            <img
              src={detailMealApi.strMealThumb}
              className="photo"
              alt={detailMealApi.strMeal}
            />
          </div>
          <div>
            <h5>Instructions:</h5>

            <p className="description-meal">
              {readMore
                ? detailMealApi.strInstructions
                : `${detailMealApi.strInstructions.substring(0, 200)}...`}
              <button
                className="showBtn"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? 'show less' : 'read more'}
              </button>
            </p>
            <h5>Area food: {detailMealApi.strArea}</h5>
            <p className="price">Price {prices}$</p>

            <div>
              <button className="btn-detail-meal" onClick={handleAdd}>
                {' '}
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMeal;
