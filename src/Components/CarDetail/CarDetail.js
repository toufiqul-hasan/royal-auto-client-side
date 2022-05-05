import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./CarDetail.css";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/car/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  return (
    <div className="container text-center mb-5">
      <Card className="car">
        <Card.Img variant="top" src={car.img} />
        <Card.Body>
          <Card.Title>Name: {car.name}</Card.Title>
          <Card.Text>ID: {car._id}</Card.Text>
          <Card.Text>Price: {car.price}</Card.Text>
          <Card.Text>Description: {car.description}</Card.Text>
          <Card.Text>Quantity: {car.quantity}</Card.Text>
          <Card.Text>Supplier: {car.supplier}</Card.Text>
          <div className="restock mb-3 d-flex align-items-center justify-content-center">
            <div>
              <input className="mx-3" type="number" name="" id="" placeholder="Restock Amount" />
            </div>
            <div>
              <button className="restock-button">Restock</button> <br />
            </div>
          </div>
          <button className="button">Delivered</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarDetail;