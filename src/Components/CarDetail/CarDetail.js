import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./CarDetail.css";

const CarDetail = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    setLoading(true);
    const url = `http://localhost:5000/car/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      });
  }, [id]);

  const handleDelivery = (event) => {
    event.preventDefault();
    const quantity = car.quantity;
    const newQuantity = parseInt(quantity - 1);
    const brandNewQuantity = { newQuantity };

    const url = `http://localhost:5000/car/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandNewQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Delivery Success!!!");
      });
  };
  const handleRestock = (event) => {
    event.preventDefault();
    const quantity = car.quantity;
    const quantityInput = parseInt(event.target.amount.value);
    const newQuantity = parseInt(quantity + quantityInput);
    const brandNewQuantity = { newQuantity };

    const url = `http://localhost:5000/car/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandNewQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Restock Success!!!");
      });
  };

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center m-auto">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
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
              <form onSubmit={handleRestock}>
                <div className="restock mb-3 d-flex align-items-center justify-content-center">
                  <div>
                    <input
                      className="mx-3"
                      type="number"
                      name="amount"
                      placeholder="Restock Amount"
                    />
                  </div>
                  <div>
                    <button className="restock-button">Restock</button> <br />
                  </div>
                </div>
              </form>
              <form onSubmit={handleDelivery}>
                <button className="button">Delivered</button>
              </form>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default CarDetail;