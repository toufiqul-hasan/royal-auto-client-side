import React from "react";
import { Spinner } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import Inventories from "../Inventories/Inventories";

const Inventory = () => {
  const [products, loading] = useProducts([]);
  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center my-auto">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div>
          <div className="products">
            {products.map((product) => (
              <Inventories key={product._id} product={product}></Inventories>
            ))}
          </div>
          <div className="container text-center mb-5">
            <button className="secondary-button">Add New Item</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Inventory;