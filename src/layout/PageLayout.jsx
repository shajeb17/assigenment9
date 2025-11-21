import React, { useEffect } from "react";
import LoginForm from "../pages/LoginForm";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

const PageLayout = () => {
      useEffect(() => {
        document.title = "Gamehub :LoginForm";
      }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-1">
        <LoginForm></LoginForm>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PageLayout;
