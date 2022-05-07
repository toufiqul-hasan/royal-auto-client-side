import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Inventories from "../Inventories/Inventories";

const Inventory = () => {
  const [products, loading, reload, setReload] = useProducts([]);
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
              <Inventories
                key={product._id}
                product={product}
                reload={reload}
                setReload={setReload}
              ></Inventories>
            ))}
          </div>
          <div className="container text-center mb-5">
            <Link to="/additem">
              <button className="secondary-button">Add Item</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Inventory;