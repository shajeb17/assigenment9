import React from 'react';
import NavBar from '../component/NavBar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
      <div className='flex flex-col min-h-screen'>
        <NavBar></NavBar>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;