import React from 'react';
import Spinner from "../../resources/images/WaterMelon.gif"

const PageLoader = () => {
    return (
        <div className="fp-container">
            <img src={Spinner} className='fp-loader' alt="loading"/>
        </div>
    );
};

export default PageLoader;