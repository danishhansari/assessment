import { useProductContext } from "../context/productContext";
import Product from "./Product";

const ProductList = () => {
  const foodList = useProductContext();
  return (
    <div>
      <h1 className="tracking-wider">Chinese - Newly Added</h1>
        {foodList.map((food) => {
          return <Product {...food} key={food.id} />;
        })}
    </div>
  );
};

export default ProductList;
