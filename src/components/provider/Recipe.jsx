import React from 'react';
import Cookies from 'js-cookie';
import './StyleProvider.scss'

const Recipe = ({id, name, description, userFirstName, userId,picture}) => {
    console.log("COOKIE ID ", Cookies.get())
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
               <img src={picture} />
            </div>
        </div>
    );
};

export default Recipe;