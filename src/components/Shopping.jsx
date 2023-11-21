import ProductList from "./ProductList";
import Cart from "./Cart";
const Shopping = () => {
  return (
    <div className="max-w-[1100px] mx-auto py-4">
      <div className="flex justify-around">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Shopping;
