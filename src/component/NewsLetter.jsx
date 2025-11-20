import React from "react";
import { FaNewspaper } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="flex w-10/12 m-auto items-center bg-black/30">
      <div className="flex-1 ml-15 text-center text-[300px]">
        <FaNewspaper></FaNewspaper>
      </div>
      <div className="flex-1">
        <div className="p-8  w-full  bg-blue-400 text-white">
          <div className="btn btn-primary mb-1.5">Our Newsletter</div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to our newsletter to receive updates
          </h1>

          <form className="flex flex-row  mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white p-3  text-gray-900 "
            />

            <button
              type="submit"
              className="px-6 py-6 font-semibold btn btn-active"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
