import React from 'react';
import Cookies from 'js-cookie';
import './StyleProvider.scss'

const Recipe = ({id, name, description, userFirstName, userId, handleDeleteRecipeById}) => {

    return (
        <div className='recipe-item'>
            <div>
                <h4>Recipe posted by: {userFirstName}</h4>
            </div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                {userId === parseInt(Cookies.get("id_user_DB")) ?
                    <div>
                        <button onClick={()=>handleDeleteRecipeById(id)}>REMOVE</button>
                    </div> :
                   null
                }

            </div>
        </div>
    );
};

export default Recipe;