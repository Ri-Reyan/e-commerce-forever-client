import React from "react";
import hero_img from "../../../../assets/frontend_assets/hero_img.png";

const HeroSection = () => {
  return (
    <section className="h-[70vh] w-auto border border-gray-400 mx-4 mt-4 rounded-sm">
      <div className="h-[40%] place-content-center">
        <div className="flex place-content-center gap-3">
          <hr className="w-1/6 bg-black h-1 mt-2" />
          <h3 className="font-inter">OUR BESTSELLERS</h3>
        </div>
        <div className="place-items-center">
          <h1 className="font-playfair text-4xl">Latest Arrivals</h1>
        </div>
        <div className="flex place-content-center gap-3 mt-2 mr-20">
          <h3 className="font-inter">SHOP NOW</h3>
          <hr className="w-1/6 bg-black h-1 mt-2" />
        </div>
      </div>

      <div className="h-[60%]">
        <img className="h-full w-full" src={hero_img} alt="Hero image" />
      </div>
    </section>
  );
};

export default HeroSection;
