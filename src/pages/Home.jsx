import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Gamehub:Home page";
  }, []);
  return <div></div>;
};

export default Home;
