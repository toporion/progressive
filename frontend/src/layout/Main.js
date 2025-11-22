import React from 'react';
import {Outlet} from 'react-router-dom';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <MenuBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;