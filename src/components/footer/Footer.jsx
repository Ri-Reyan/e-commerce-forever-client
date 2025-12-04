import React from "react";
import logo from "../../assets/frontend_assets/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex flex-col mx-4 mt-28 lg:px-28 lg:flex lg:flex-row lg:justify-between ">
        <div className="lg:w-[25%] lg:tracking-tighter">
          <img className="h-[40px]" src={logo} alt="Logo" />
          <br />
          <br />
          <h1 className="font-inter text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h1>
        </div>
        <br />
        <br />
        <div className="lg:w-[25%] lg:tracking-tighter">
          <h1 className="text-2xl font-montserrat font-semibold">COMPANY</h1>
          <br />
          <br />
          <button
            onClick={() => {
              navigate("/about");
            }}
            className="font-inter text-base cursor-pointer"
          >
            About us
          </button>
          <br />
          <button
            onClick={() => {
              navigate("/delivery");
            }}
            className="font-inter text-base cursor-pointer"
          >
            Delivery
          </button>
          <br />
          <button
            onClick={() => {
              navigate("/policy");
            }}
            className="font-inter text-base cursor-pointer"
          >
            Privacy policy
          </button>
        </div>
        <br />
        <br />
        <div className="lg:w-[25%] lg:tracking-tighter">
          <h1 className="text-2xl font-montserrat font-semibold">
            GET IN TOUCH
          </h1>
          <br />
          <br />
          <h3 className="font-inter">+1-000-000-0000</h3>
          <h3 className="font-inter">forever.ltd@gmail.com</h3>
          <a
            className="font-inter"
            target="_blank"
            href="https://www.instagram.com/i.reyannn?igsh=ZGJtaGxoYWhxdXV6"
          >
            Instagram
          </a>
        </div>
        <br />
        <br />
      </div>
      <div className="lg:mx-[400px]">
        <hr className="w-full h-[1px] lg:h-[2px]  bg-gray-300 " />
        <h1 className="text-base tracking-tighter font-montserrat whitespace-nowrap">
          Copyright 2025@ forever.ltd - All Right Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
