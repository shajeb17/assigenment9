import React, { use } from "react";
import { Link } from "react-router";
import SimpleImageSlider from "react-simple-image-slider";
import { AuthContext } from "../uesContextHook/formhook/AuthContex";

const Banner = () => {
  let { userInfo } = use(AuthContext);
  let images = [
    { url: "https://i.ibb.co.com/RpBfbFPs/pexels-lulizler-3165335.jpg" },
    { url: "https://i.ibb.co.com/RpBfbFPs/pexels-lulizler-3165335.jpg" },
    { url: "https://i.ibb.co.com/RpBfbFPs/pexels-lulizler-3165335.jpg" },
  ];
  return (
    <section className="bg-gradient-to-r from-[#9E9E9E] to-[#404233] text-white py-5 px-5 text-center">
      <h1 className="text-[48px]  font-bold mb-0 max-[400px]:text-3xl">Gamehub - A Game Library</h1>
      <p className="text-[15px]  mb-3 max-w-2xl mx-auto max-[400px]:text-[13px]">
        An engaging online library for discovering and supporting game
        developers. Users can browse indie games, see detailed information, and
        install if you like them.
      </p>


      {userInfo ? (
        <Link
          to={"browse"}
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Explore Games
        </Link>
      ) : (
        <Link to={"/pagelayout"} className="btn btn-primary rounded-2xl">
          Explore Games
        </Link>
      )}

      <div className="flex m-auto w-10/12 justify-center mt-5 max-[1200px]:hidden">
        <SimpleImageSlider
           width={1000}
          height={300}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </section>
  );
};

export default Banner;
