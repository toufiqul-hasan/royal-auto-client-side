import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyItems = ({ car, reload, setReload }) => {
  const { _id, name, img, price, description, quantity, supplier } = car;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  const handleProductDelete = () => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      const url = `https://thawing-retreat-14463.herokuapp.com/car/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setReload(!reload);
        });
      toast("Delete Success!!!");
    }
  };

  return (
    <div className="mb-5">
      <Card className="product">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>Supplier: {supplier}</Card.Text>
          <div className="d-flex justify-content-between">
            <button
              className="primary-button"
              onClick={() => navigateToServiceDetail(_id)}
            >
              Update
            </button>
            <button
              className="delete-button"
              onClick={() => handleProductDelete()}
            >
              Delete
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyItems;