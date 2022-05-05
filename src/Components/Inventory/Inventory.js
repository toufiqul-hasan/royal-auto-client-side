import React from "react";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

const Inventory = () => {
  const [products] = useProducts([]);
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Inventory;
