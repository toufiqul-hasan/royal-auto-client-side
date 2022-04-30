import React from "react";
import { FaRegMoneyBillAlt, FaThumbsUp, FaHistory, FaUsers } from "react-icons/fa";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div className="container mt-5 mb-5 section-name">
      <div className="text-center">
        <h2>Why Royal Auto</h2>
        <p>
          With new vision in the vehicles trade we started our journey in the
          name of Royal Auto in the year 1995. Quality that customer always
          looking for, we are concentrating on that. Now, we are one of the
          biggest Automobiles importers, whole-sellers and retailers in this
          country consisting three showroom.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-3 col-sm-6">
          <div className="info">
            <div className="info-icon">
              <FaRegMoneyBillAlt />
            </div>
            <h5>Best Price</h5>
            <p>
              We will ensure you that you get the best car within your budget.
            </p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="info">
            <div className="info-icon">
              <FaThumbsUp />
            </div>
            <h5>Faster Buy & Sell</h5>
            <p>
              We will ensure you that you will buy or sell your car in a very
              short time.
            </p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="info">
            <div className="info-icon">
              <FaHistory />
            </div>
            <h5>Free Support</h5>
            <p>
              Looking for a car don't worry about the hassle, we'll take care of
              it.
            </p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="info">
            <div className="info-icon">
              <FaUsers />
            </div>
            <h5>Professional Dealers</h5>
            <p>
              We are very professional in our workplace so don't worry about
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;