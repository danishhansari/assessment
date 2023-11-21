import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
const Cart = () => {
  const { cart } = useCart();
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const updatedCartData = cart.map((item) => ({
      product: item,
      quantity: 1,
    }));
    setCartData(updatedCartData);
  }, [cart]);
  const increment = (index) => {
    const updatedCartData = [...cartData];
    updatedCartData[index].quantity += 1;
    setCartData(updatedCartData);
  };
  const decrement = (index) => {
    const updatedCartData = [...cartData];
    updatedCartData[index].quantity = Math.max(1, updatedCartData[index].quantity - 1);
    setCartData(updatedCartData);
  };
  return (
    <div>
      {cartData.map((cartItem, index) => {
        const { product, quantity } = cartItem;
        return (
          <div key={index} className="flex items-center gap-2 my-2">
            <img src={product.image} className="w-20 rounded" alt={product.title} />
            <p>{product.title}</p>
            <button onClick={() => decrement(index)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => increment(index)}>+</button>
            <p>₹{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

