import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/animatoins/Loading.json";

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URI}/api/user/allproducts`,
        );

        setProducts(response.data.product || []);
      } catch (err) {
        console.error("API error:", err);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie
          className="w-[50px] h-[50px] lg:h-[200px] lg:w-[200px]"
          animationData={loadingAnimation}
          loop={true}
        />
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-28 mt-16 lg:mt-32 ">
      <section className="h-full w-full flex">
        <div className="text-center lg:mx-[400px]">
          <h1 className="font-montserrat text-4xl text-gray-500 font-normal">
            LATEST{" "}
            <span className="font-montserrat font-semibold text-black tracking-tighter">
              COLLECTIONS
            </span>
          </h1>
        </div>
      </section>

      <div className="grid grid-cols-2 lg:grid-cols-5 place-content-center mt-8 gap-4">
        {products.map((item, i) => (
          <div key={i}>
            <img
              onClick={() => {
                navigate(`/room/${item._id}`, { state: { product: item } });
              }}
              src={item.images[0]}
              alt="Product Images"
            />
            <br />
            <h1 className="font-inter text-xl text-gray-400">{item.name}</h1>
            <br />
            <h1 className="font-montserrat text-xl text-black">
              ${item.price}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
