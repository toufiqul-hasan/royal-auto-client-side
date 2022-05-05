import React from "react";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";
import "./FeaturedCars.css";

const FeaturedCars = () => {
  const [products] = useProducts([]);
  return (
    <div className="section-title mt-5">
      <div className="text-center">
        <h2>Featured Cars</h2>
        <p>Helps you to find the perfect car for you.</p>
      </div>
      <div className="products">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
