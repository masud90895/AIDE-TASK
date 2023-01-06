import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import News from './News';

const Home = () => {
    return (
        <>
            <Banner />
            <News/>
            <Products/>
        </>
    );
};

export default Home;