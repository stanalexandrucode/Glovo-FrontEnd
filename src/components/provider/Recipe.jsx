import React, {useState} from 'react';
import Cookies from 'js-cookie';
import './StyleProvider.scss'

const Recipe = ({id, name, description, userFirstName, userId, image,handleDeleteRecipeById}) => {
    const [readMore, setReadMore] = useState(false);

    console.log("IMAGE RECIPE ",image)
    return (
        <div className='recipe-item'>
            <div>
                <h4>Recipe posted by: {userFirstName}</h4>
            </div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
              <img src={image} style={{ width: 100, height: 100 }}/>
            </div>
            <div>
                <p className="description-meal">
                    {readMore
                        ? description
                        : `${description.substring(0, 100)}...`}
                    <button
                        className="showBtn"
                        onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
            </div>
            <div>
                {userId === parseInt(Cookies.get("id_user_DB")) ?
                    <div>
                        <button onClick={() => handleDeleteRecipeById(id)}>REMOVE</button>
                    </div> :
                    null
                }

            </div>
        </div>
    );
};

export default Recipe;