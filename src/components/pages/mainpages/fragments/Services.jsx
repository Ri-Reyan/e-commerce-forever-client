import React from "react";
import exchange_icon from "../../../../assets/frontend_assets/exchange_icon.png";
import quality_icon from "../../../../assets/frontend_assets/quality_icon.png";
import support_img from "../../../../assets/frontend_assets/support_img.png";

const Services = () => {
  return (
    <div className="place-items-center px-4 mt-20">
      <div>
        <img className="place-self-center" src={exchange_icon} alt="" />
        <h1 className="text-xl font-montserrat text-center font-semibold">
          Easy Exchange Policy
        </h1>
        <p className="text-base font-inter text-center text-gray-500">
          We offer hassle free exchange policy
        </p>
      </div>
      <br />
      <br />
      <div>
        <img className="place-self-center" src={quality_icon} alt="" />
        <h1 className="text-xl font-montserrat text-center font-semibold">
          7 Days Return Policy
        </h1>
        <p className="text-base font-inter text-center text-gray-500">
          We provide 7 days free return policy
        </p>
      </div>
      <br />
      <br />
      <div>
        <img className="place-self-center" src={support_img} alt="" />
        <h1 className="text-xl font-montserrat text-center font-semibold">
          Best customer support
        </h1>
        <p className="text-base font-inter text-center text-gray-500">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default Services;
