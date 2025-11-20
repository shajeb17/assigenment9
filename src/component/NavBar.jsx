import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
           <div className="text-2xl">
              <IoGameController></IoGameController>
           </div>
          <span className="font-bold text-xl">Gamehub</span>
        </div>

        <div className="flex gap-6 text-gray-300">
          <NavLink href="/" className="hover:text-white">
            Home
          </NavLink>
          <NavLink href="/browse" className="hover:text-white">
            Browse Games
          </NavLink>
        </div>


        <div className="flex items-center gap-2 cursor-pointer">
           <Link className="btn btn-primary font-bold text-[15px]">LogIn</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
