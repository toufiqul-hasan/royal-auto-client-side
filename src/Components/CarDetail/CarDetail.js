import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Card, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./CarDetail.css";

const CarDetail = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = `https://thawing-retreat-14463.herokuapp.com/car/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      });
  }, [id, reload]);

  const handleRestock = (event) => {
    event.preventDefault();
    const quantity = car.quantity;
    const quantityInput = parseInt(event.target.amount.value);
    const newQuantity = parseInt(quantity + quantityInput);
    const brandNewQuantity = { newQuantity };
    const url = `https://thawing-retreat-14463.herokuapp.com/car/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandNewQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(!reload);
        event.target.reset();
      });
    toast("Product has been restocked successfully !");
  };

  const handleDelivery = (event) => {
    event.preventDefault();
    if (car.quantity > 0) {
      const quantity = car.quantity;
      const newQuantity = parseInt(quantity - 1);
      const brandNewQuantity = { newQuantity };
      const url = `https://thawing-retreat-14463.herokuapp.com/car/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(brandNewQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          setReload(!reload);
        });
      toast("Product has been delivered successfully !");
    } else {
      toast("Sold Out...!!!");
      return;
    }
  };

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center m-auto">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div className="container text-center mb-5">
          <div className="title mt-3">PRODUCT DETAILS</div>
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
                    <button className="secondary-button">Restock</button> <br />
                  </div>
                </div>
              </form>
              <form onSubmit={handleDelivery}>
                <button className="secondary-button">Delivered</button>
              </form>
            </Card.Body>
          </Card>
          <div className="container text-center">
            <Link to="/inventory">
              <button className="secondary-button">Manage Inventory</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetail;