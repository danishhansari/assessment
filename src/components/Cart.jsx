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
    updatedCartData[index].quantity = Math.max(
      1,
      updatedCartData[index].quantity - 1
    );
    setCartData(updatedCartData);
  };
  return (
    <div>
      <h2>Cart</h2>
      {cartData.length === 0 ? (
        <>
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/964/514/non_2x/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg"
            className="w-56"
          />
          <p className="text-center">Cart is empty</p>
        </>
      ) : (
        cartData.map((cartItem, index) => {
          const { product, quantity } = cartItem;
          return (
            <>
              <div key={index} className="flex items-center gap-2 my-2">
                <img
                  src={product.image}
                  className="w-20 rounded"
                  alt={product.title}
                />
                <p>{product.title}</p>
                <button onClick={() => decrement(index)}>-</button>
                <p>{quantity}</p>
                <button onClick={() => increment(index)}>+</button>
                <p>₹{product.price}</p>
              </div>

              <div className="subtotal"></div>
            </>
          );
        })
      )}
    </div>
  );
};

export default Cart;
