import React, {useState, useEffect} from 'react'
import {axiosSpring} from '../../common/axios';
import Cookies from 'js-cookie';
import Recipe from "./Recipe";
import axios from "axios";
import {toast} from "react-toastify";
import AddRecipes from "./AddRecipes";


export default function Recipes() {

    const [recipes, setRecipes] = useState([])
    const [token, setToken] = useState('');

    const getAllRecipes = async () => {
        const response = await axiosSpring
            .get(`/recipes/all`, {})
            .catch((err) => console.log('Error:', err));
        if (response.status === 200 && response.data) {
            setRecipes(response.data)
            console.log("recipes", recipes);
            return response.data;
        }
    }

    useEffect(() => {
        getAllRecipes()
        setToken(Cookies.get('token'));
    }, [token]);

    const handleDeleteRecipeById = async (id) => {
        let removeRecipeById = recipes.filter((recipe) => recipe.id !== id);
        let res = await axios({
            method: 'delete',
            url: process.env.REACT_APP_API_URL + `/recipes/${id}`,
        }).catch((err) => console.log("Error ", err))

        if (res.status === 200) {
            toast.success('Recipe was deleted!');
            setRecipes(removeRecipeById)
        }
    }


    return (
        <div className="page-recipes">
            <div id="col-1">
                {recipes.map((recipe) => {
                    return <Recipe key={recipe.id} handleDeleteRecipeById={handleDeleteRecipeById} {...recipe}/>
                })}
            </div>
            <div id="col-2">
                {token ?
                    <AddRecipes/> : null}
            </div>
        </div>
    )
}

