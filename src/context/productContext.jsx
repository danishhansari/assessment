import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

const API = "./data.json";
const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const getProducts = async (url) => {
    const res = await axios.get(url);
    setData(await res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};


export {ProductContext, ProductProvider, useProductContext}