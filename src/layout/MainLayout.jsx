import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import NewsLetter from "../component/NewsLetter";
import useGamming from "../hooks/useGamming";
import GammingCard from "../pages/GammingCard";

const MainLayout = () => {
  let  {data,loadding}=useGamming()

  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div className="grid grid-cols-3 gap-3.5 w-10/12 m-auto">
            {
        data?.data?.map(myData=>
          <GammingCard key={myData.id} myData={myData} ></GammingCard>  
        )
      }
      </div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
