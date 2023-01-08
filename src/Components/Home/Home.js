import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import News from './News';

const Home = () => {
    return (
        <div className='mx-3'>
            <Banner />
            <News/>
            <Products/>
        </div>
    );
};

export default Home;