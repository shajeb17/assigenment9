import React, { useEffect } from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import BrowserGame from '../pages/BrowserGame';
import useGamming from '../hooks/useGamming';

const BrowserLayout = () => {
  let { data } = useGamming();

  useEffect(() => {
    document.title = "Gamehub :BrowserGame";
  }, []);
   
    
    return (
   <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="grid grid-cols-3 gap-3.5 w-10/12 m-auto py-15 max-[1100px]:grid-cols-2 max-[750px]:grid-cols-1">
        {data?.data?.map((myData) => (
       <BrowserGame key={myData.id} myData={myData}></BrowserGame>
        ))}
      </div>
      <Footer></Footer>
    </div>
    );
};

export default BrowserLayout;