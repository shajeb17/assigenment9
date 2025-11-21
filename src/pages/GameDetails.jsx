import React from "react";
import { useLocation } from "react-router";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
const GameDetails = () => {
  let location = useLocation();
  let addData = location.state;
  let {
    title,
    coverPhoto,
    description,
    ratings,
    developer,
    downloads,
    category,
    reviews,
  } = addData;

  return (
    <div className="flex flex-col min-h-screen">
       <NavBar></NavBar>
      <div className="bg-white p-6 my-10 rounded-3xl shadow-2xl w-full max-w-xl mx-auto border">
        <div className="flex items-start space-x-4 mb-6">
          <div className="flex flex-col text-center m-auto">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {title}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Developed by: <span className="font-semibold">{developer}</span>
            </p>
            <p className="text-sm text-blue-600 font-medium">{category}</p>
          </div>
        </div>

        <div className="mb-6 rounded-xl overflow-hidden shadow-xl">
          <img
            src={coverPhoto}
            alt="Game Screenshot"
            className="w-full h-auto object-cover"
          />
        </div>


        <div className="flex items-center justify-between text-center border-y py-4 mb-6">
          <div>
            <span className="text-xl font-bold text-green-600 block">
              {downloads}
            </span>
            <span className="text-xs text-gray-500">Downloads</span>
          </div>

          <div>
            <span className="text-xl font-bold text-yellow-500 block">{ratings}</span>
            <span className="text-xs text-gray-500">User Rating</span>
          </div>

          <div>
            <span className="text-xl font-bold text-blue-600 block">{reviews}</span>
            <span className="text-xs text-gray-500">Reviews</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            About the Game
          </h3>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>
      </div>
        
         <Footer></Footer>
    </div>
  );
};

export default GameDetails;
