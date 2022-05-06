import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Inventories.css";

const Inventories = ({ product }) => {
  const { _id, name, img, price, description, quantity, supplier } = product;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
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
          <button className="delete-button">Delete</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inventories;