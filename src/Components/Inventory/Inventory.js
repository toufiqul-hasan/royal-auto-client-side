import React from "react";
import { Spinner } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

const Inventory = () => {
  const [products, loading] = useProducts([]);
  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center my-auto">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div className="products">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </>
  );
};

export default Inventory;