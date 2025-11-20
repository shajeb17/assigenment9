import React from "react";
import SimpleImageSlider from "react-simple-image-slider";



const Banner = () => {
  let images = [
    { url: "https://i.ibb.co.com/RpBfbFPs/pexels-lulizler-3165335.jpg" },
    { url: "https://i.ibb.co.com/RpBfbFPs/pexels-lulizler-3165335.jpg" },
    { url: "https://i.ibb.co.com/RpBfbFPs/pexels-lulizler-3165335.jpg" },

  ];
  return (
    <section className="bg-gradient-to-r from-[#9E9E9E] to-[#404233] text-white py-5 px-5 text-center">
      <h1 className="text-[48px]  font-bold mb-0">Gamehub - A Game Library</h1>
      <p className="text-[15px]  mb-3 max-w-2xl mx-auto">
        An engaging online library for discovering and supporting game
        developers. Users can browse indie games, see detailed information, and
        install if you like them.
      </p>
      <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
        Explore Games
      </button>
      <div className="flex m-auto justify-center mt-5">
        <SimpleImageSlider
          width={700}
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
