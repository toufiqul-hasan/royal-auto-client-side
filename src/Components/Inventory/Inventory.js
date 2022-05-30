import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
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
          <div className="title mt-3">INVENTORY</div>
          <div className="container mt-4">
            <Table responsive>
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Supplier</th>
                  <th className="text-center">Manage</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <Inventories
                    key={product._id}
                    index={index}
                    product={product}
                    reload={reload}
                    setReload={setReload}
                  ></Inventories>
                ))}
              </tbody>
            </Table>
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