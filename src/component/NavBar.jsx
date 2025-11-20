import React, { use } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";

const NavBar = () => {
  let { userInfo, handleSignout } = use(AuthContext);

  let handleClick = () => {
    handleSignout();
  };
  console.log(userInfo);

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
          {userInfo ? (
            <div className="flex items-center gap-3">
              <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="">
                   <img src={userInfo?.photoURL} className="w-[35px] h-[35px] object-cover rounded-full" />
                </div>
                <ul
                  tabIndex="1"
                  className="dropdown-content menu rounded-box z-1 mt-5 w-[200px] ml-[-50px] bg-black/80 p-2 shadow-sm text-white"
                >
                 <div>
                    <div className="flex">  My Name :{userInfo?.displayName}</div>
                    <div className="flex">  Email :{userInfo?.email}</div>
                 </div>
                </ul>
              </div>
              <button className="btn btn-secondary" onClick={handleClick}>
                Sign out
              </button>
            </div>
          ) : (
            <Link
              to={"/pagelayout"}
              className="btn btn-primary font-bold text-[15px]"
            >
              LogIn
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
