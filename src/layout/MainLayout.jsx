import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import NewsLetter from "../component/NewsLetter";
import useGamming from "../hooks/useGamming";
import GammingCard from "../pages/GammingCard";

const MainLayout = () => {
  let { data, loadding } = useGamming();
  let [fdata, setfdata] = useState();
useEffect(() => {
  if (data?.data) {
    const myData = data.data.filter((all) => parseFloat(all.ratings) > 4.5);
    setfdata(myData.slice(0,3));
  }
}, [data]);

 
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div className="grid grid-cols-3 gap-3.5 w-10/12 m-auto py-15">
        {fdata?.map((myData) => (
          <GammingCard key={myData.id} myData={myData}></GammingCard>
        ))}
      </div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
