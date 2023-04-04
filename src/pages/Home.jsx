import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/body/Header';

const Home = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default Home;