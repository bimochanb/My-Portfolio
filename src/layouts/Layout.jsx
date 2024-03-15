import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../componentsGlobal/Navbar';
import Footer from '../componentsGlobal/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
