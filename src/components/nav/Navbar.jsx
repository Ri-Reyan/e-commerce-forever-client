import React, { useState } from "react";
import logo from "../../assets/frontend_assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoBagOutline } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import SearchSection from "./search/SearchSection";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchExpand, setSearchExpan] = useState(false);
  const { cart } = useCart();
  return (
    <div className="w-full h-auto sticky">
      <div className="flex">
        <div className="w-1/2 p-4">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="h-[40px] w-auto cursor-pointer"
            src={logo}
            alt="E-commerce logo"
          />
        </div>

        <div className="w-1/2 place-items-center flex gap-4">
          <IoIosSearch
            onClick={() => {
              setSearchExpan(!searchExpand);
            }}
            size="33px"
            className="cursor-pointer"
          />
          <RxAvatar size="33px" className="cursor-pointer" />
          <div className="relative">
            <IoBagOutline onClick={() => navigate("/cart")} size={30} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-black text-white px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <BiMenuAltRight size="33px" className="cursor-pointer" />
        </div>
      </div>
      {searchExpand ? <SearchSection /> : <></>}
    </div>
  );
};

export default Navbar;
