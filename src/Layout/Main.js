import React from 'react';
import Banner from '../Components/Home/Banner';
import News from '../Components/Home/News';
import Products from '../Components/Products/Products';
import Navbar from '../Components/Shared/Navbar';

const Main = () => {
    return (
        <>
            <Navbar/>
            <hr />
            <Banner />
            <News/>
            <Products/>
        </>
    );
};

export default Main;