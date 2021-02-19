import React,{useState,useEffect} from 'react'
import { axiosSpring } from '../../common/axios';
import Cookies from 'js-cookie';


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
  if (response.status===201 && response.data) {
    console.log("data",response);
    setRecipes(response.data)
    return response.data;
  }}
 console.log( "get",getAllRecipes())

 useEffect(() => {
    setToken(Cookies.get('token'));
    if (token && token !== '') {
      setNotFound(false)
    }
  }, [token]);

    return (
        <div>
            CEVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
    )
}

