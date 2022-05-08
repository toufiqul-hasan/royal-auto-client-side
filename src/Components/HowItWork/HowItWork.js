import React from "react";
import homeIcon1 from "../../Assets/Images/homeIcon1.png";
import homeIcon2 from "../../Assets/Images/homeIcon2.png";
import homeIcon3 from "../../Assets/Images/homeIcon3.png";
import homeIcon4 from "../../Assets/Images/homeIcon4.png";
import "./HowItWork.css";

const HowItWork = () => {
  return (
    <div className="container mt-5 mb-5 section-title">
      <div className="text-center">
        <h2>How It Work</h2>
        <p>Helps you to find perfect car. Explained here how it works.</p>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="steps">
            <div className="icons">
              <img src={homeIcon1} alt="" />
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
              <img src={homeIcon2} alt="" />
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
              <img src={homeIcon3} alt="" />
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
              <img src={homeIcon4} alt="" />
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
