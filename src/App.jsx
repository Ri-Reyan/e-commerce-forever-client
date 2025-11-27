import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import MainPage from "./components/pages/mainpages/MainPage";
import ProductDetails from "./components/pages/ProductPages/ProductDetails";
import CartPage from "./components/pages/ProductPages/cart/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-full w-full">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/room/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
