import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export const axiosSpring = Axios.create({
  baseURL: "https://tt-glovo.herokuapp.com",
});


