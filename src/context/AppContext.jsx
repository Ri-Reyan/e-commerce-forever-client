import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sizes, setSizes] = useState("");
  const [productName, setProductName] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productPrice, setProductPrice] = useState();

  return (
    <AppContext.Provider value={{ sizes, setSizes }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseApp = () => useContext(AppContext);
