import React from 'react';
import NavBar from '../component/NavBar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';
import Banner from '../component/Banner';

const MainLayout = () => {
    return (
      <div className='flex flex-col min-h-screen'>
        <NavBar></NavBar>
        <Banner></Banner>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;