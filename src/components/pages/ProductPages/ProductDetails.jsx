import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { UseApp } from "../../../context/AppContext";
import { useCart } from "../../../context/CartContext";

const ProductDeatils = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [activeIndex, setActiveIndex] = useState(0);
  const { sizes, setSizes } = UseApp();
  const [sizeExits, setSizeExits] = useState(false);
  const [buttonValue, setButtonValue] = useState(null);
  const [submittedValue, setSubmittedValue] = useState(false);
  const { addToCart } = useCart();

  if (!product) return <h1 className="text-center mt-10">No Product Data</h1>;

  return (
    <div className="p-4 mt-10 max-w-3xl mx-auto">
      {/* MAIN IMAGE */}
      <img
        src={product.images[activeIndex]}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl mb-4"
      />

      {/* THUMBNAILS */}
      <div className="flex gap-3">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActiveIndex(i)}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
              activeIndex === i ? "border-black" : "border-gray-300"
            }`}
          />
        ))}
      </div>

      {/* PRODUCT INFO */}
      <h1 className="text-3xl font-montserrat font-bold mt-5">
        {product.name}
      </h1>
      <p className="mt-3 font-montserrat text-2xl font-semibold">
        ${product.price}
      </p>
      <br />
      <h1 className="font-inter text-xl text-gray-400">
        {product.description}
      </h1>
      <br />
      <h1 className="font-bold text-xl font-montserrat ">Select Size</h1>
      <div className="flex flex-row gap-4 mt-2">
        {product.sizes.slice(0, 5).map((size, i) => (
          <h1
            onClick={() => {
              setSizes(size);
              setSizeExits(true);
            }}
            className={`w-[40px] h-[40px]  text-center text-base font-inter p-2 rounded ${
              sizes === size ? "bg-black text-white" : "bg-gray-100"
            } `}
            key={i}
          >
            {size}
          </h1>
        ))}
      </div>
      {buttonValue ? (
        <h1
          className={`text-red-500 text-xl font- ${
            sizeExits ? "hidden" : "block"
          }`}
        >
          Please Select a size.
        </h1>
      ) : (
        <></>
      )}

      {submittedValue ? (
        <h1
          className={`text-green-500 text-xl font- ${
            sizeExits ? "block" : "hidden"
          }`}
        >
          Product added to cart.
        </h1>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          setButtonValue(true);
          if (sizeExits) {
            setSubmittedValue(true);
            addToCart(product);
          }
        }}
        className="h-[40px] w-[40%] bg-black text-white mt-4 rounded font-inter font-normal"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductDeatils;
