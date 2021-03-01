import React,{useState,useEffect} from 'react'
import { axiosSpring } from '../../common/axios';
import Cookies from 'js-cookie';
import Recipe from "./Recipe";


export default function Recipes() {

    const[recipes, setRecipes]=useState([])
    const [token, setToken] = useState('');
  const [notFound, setNotFound] = useState(true);
  
    const getAllRecipes = async () =>{
    const response = await axiosSpring
    .get(`/recipes/all`, {
      headers: {
        Authorization: 'Bearer ' + Cookies.get('token'),
      },
    })
    .catch((err) => console.log('Error:', err));
    console.log(response)
  if (response.status===200 && response.data) {
    console.log("data",response);
    setRecipes(response.data)
    return response.data;
  }}


 useEffect(() => {
    setToken(Cookies.get('token'));
    if (token && token !== '') {
      setNotFound(false)
        getAllRecipes()
    }
  }, [token]);
 console.log("all ",recipes)
    return (
        <div>
            {recipes.map((recipe)=>{
                return <Recipe {...recipe}/>
            })}
        </div>
    )
}

