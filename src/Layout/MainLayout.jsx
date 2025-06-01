import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;