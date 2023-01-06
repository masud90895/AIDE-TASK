import React from 'react';
import Banner from '../Components/Home/Banner';
import News from '../Components/Home/News';
import Navbar from '../Components/Shared/Navbar';

const Main = () => {
    return (
        <>
            <Navbar/>
            <Banner />
            <News/>
        </>
    );
};

export default Main;