import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./Inventories.css";

const Inventories = ({ product, index, reload, setReload }) => {
  const { _id, name, price, quantity, supplier } = product;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  const handleProductDelete = () => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      const url = `https://royal-auto.onrender.com/car/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setReload(!reload);
        });
      toast("Product has been deleted successfully !");
    }
  };

  return (
    <tr>
      <th className="text-center">{index + 1}</th>
      <th>{name}</th>
      <th className="text-center">{price}</th>
      <th className="text-center">{quantity}</th>
      <th className="text-center">{supplier}</th>
      <th className="text-center">
        <button
          className="manage-button"
          onClick={() => navigateToServiceDetail(_id)}
        >
          <FaEdit />
        </button>
      </th>
      <th className="text-center">
        <button className="delete-button" onClick={() => handleProductDelete()}>
          <FaTrash />
        </button>
      </th>
    </tr>
  );
};

export default Inventories;
