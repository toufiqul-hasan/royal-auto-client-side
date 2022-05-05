import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { name, img, price, description, quantity, supplier } = product;
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
          <Link to="">
            <button className="button">Update</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;