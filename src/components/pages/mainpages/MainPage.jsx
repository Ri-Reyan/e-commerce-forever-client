import React from "react";
import HeroSection from "./fragments/HeroSection";
import ProductDisplay from "./fragments/ProductDisplay";
import Services from "./fragments/Services";
import Newsletter from "./fragments/Newsletter";

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <ProductDisplay />
      <Services />
      <Newsletter />
    </div>
  );
};

export default MainPage;
