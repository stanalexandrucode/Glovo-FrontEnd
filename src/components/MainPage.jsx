import React from 'react';
import Carusel from './carusel/Carusel';
import Categories from './category/Categories';

const MainPage = () => {
  return (
      <>
    <div>
      <div>
        <Carusel />
      </div>
      <div className=''>
        <Categories />
      </div>
    </div>
    </>
  );
};

export default MainPage;
