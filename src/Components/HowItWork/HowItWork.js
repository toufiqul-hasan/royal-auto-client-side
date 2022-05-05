import React from "react";
import i1 from "../../Assets/Images/i1.png";
import i2 from "../../Assets/Images/i2.png";
import i3 from "../../Assets/Images/i3.png";
import i4 from "../../Assets/Images/i4.png";
import "./HowItWork.css";

const HowItWork = () => {
  return (
    <div className="container mt-5 mb-5 section-title">
      <div className="text-center">
        <h2>How it Work</h2>
        <p>Helps you to find perfect car. Explained here how it works.</p>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="steps">
            <div className="icons">
              <img src={i1} alt="" />
            </div>
            <h5>Search Our Inventory</h5>
            <p>
              First you look at our inventory. Then you will visit our
              collections.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="steps">
            <div className="icons">
              <img src={i2} alt="" />
            </div>
            <h5>Choose The Car You Like</h5>
            <p>
              After touring the inventory you will decide which is your desire
              car.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="steps">
            <div className="icons">
              <img src={i3} alt="" />
            </div>
            <h5>Apply For Auto Finance</h5>
            <p>
              Then apply for a loan from the bank to buy the car of your desire.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="steps">
            <div className="icons">
              <img src={i4} alt="" />
            </div>
            <h5>Get Approved & Drive</h5>
            <p>After getting the loan you are ready to buy your desire car.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
