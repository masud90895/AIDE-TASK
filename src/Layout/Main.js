import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';

const Main = () => {
    return (
        <>
            <Navbar/>
            <hr />
            <Outlet/>
        </>
    );
};

export default Main;