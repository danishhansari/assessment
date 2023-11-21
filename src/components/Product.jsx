import { useEffect } from "react";
import { useCart } from "../context/CartContext";

const Product = ({ title, price, fullPrice, image }) => {
  const { addtoCart } = useCart();
  const handleAddToCart = () => {
    const newItem = { title, price, image };
    addtoCart(newItem);
  };
  return (
    <>
      <div className="flex gap-4 items-center my-2">
        <img src={image} className="rounded-xl w-40" alt={title} />
        <div className="text">
          <p>{title}</p>
          <p>
            ₹{price} <del className="pl-2 text-gray-800">{fullPrice}</del>
          </p>
        </div>
        <button
          className="mt-2 text-blue-500 border rounded border-blue-500 p-2 hover:bg-blue-500 hover:text-white transition-colors duration-75"
          onClick={handleAddToCart}
        >
          ADD +
        </button>
      </div>
    </>
  );
};

export default Product;
