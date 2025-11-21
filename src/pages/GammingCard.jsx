import React from "react";
import { FaStar } from "react-icons/fa";
import { FaDownLong } from "react-icons/fa6";
import { IoChatbubbleSharp } from "react-icons/io5";
import { Link } from "react-router";

const GammingCard = ({ myData }) => {
  let {
    title,
    downloadLink,
    description,
    ratings,
    developer,
    downloads,
    reviews
  } = myData;
 

  
  return (
    <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-xl mx-auto border border-gray-100">
     
      <div className="flex  space-x-2 mb-6">
        <div className="w-10 h-10 bg-yellow-400   rounded-full  overflow-hidden   ">
          <img
            src="the url dont work"
            alt="PUBG App Icon"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex mt-[-10px] flex-col pt-1">
          <h1 className="text-[18px]  font-extrabold text-gray-900 ">
            {title}
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Developed by :
            <span className="font-semibold text-gray-700"> {developer}</span>
          </p>
        </div>
      </div>

     
      <div className="mb-6 rounded-xl overflow-hidden shadow-xl">
        <img
          src="the url dont work"
          alt="Main game screenshot"
          className="w-full h-auto object-cover"
        />
      </div>


      <div className="flex items-center justify-between text-center border-t border-b border-gray-100 py-4 mb-1">
        <div className="flex flex-col items-center">
        <div className="text-green-500">
            <FaDownLong></FaDownLong>
        </div>
          <span className="text-xl font-bold text-green-600">{downloads}</span>
          <span className="text-xs text-gray-500">Downloads</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-yellow-500">
             <FaStar></FaStar>
          </div>
          <span className="text-xl font-bold text-yellow-500">{ratings}</span>
          <span className="text-xs text-gray-500">User Rating</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-blue-600">
            <IoChatbubbleSharp />
          </div>
          <span className="text-xl font-bold text-blue-600">{reviews}</span>
          <span className="text-xs text-gray-500">Reviews</span>
        </div>
      </div>

      <div className="mb-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          About the Game
        </h3>
        <p className="text-gray-600 text-sm">
           {description}
        </p>
      </div>


      <div className="flex gap-4">
        <Link to={"gamedetails"} state={myData} className="btn btn-primary rounded-2xl">
          More Details
        </Link>

        <a
          href={downloadLink}
          target="_blank"
          className="btn bg-blue-500 text-white rounded-2xl px-8"
        >
          Install Now
        </a>
      </div>
    </div>
  );
};

export default GammingCard;
