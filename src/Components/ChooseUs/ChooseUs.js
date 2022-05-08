import React from "react";
import aboutIcon1 from "../../Assets/Images/aboutIcon1.png";
import aboutIcon2 from "../../Assets/Images/aboutIcon2.png";
import aboutIcon3 from "../../Assets/Images/aboutIcon3.png";
import aboutIcon4 from "../../Assets/Images/aboutIcon4.png";
import aboutCar from "../../Assets/Images/aboutCar.jpg";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="gray-bg mt-5 mb-5">
      <div className="container pt-5 pb-5">
        <div className="choose-us text-center">
          <h2>
            Why <span>Choose Us</span>
          </h2>
          <hr />
          <p>
            Buying a car is a bit of a hassle? Leave it to us and live tension
            free! We will work hard to ensure you that you get the best car
            within your budget. We plan to achieve our goal through your's
            co-operation and our strength the employees and seek their
            continuous involvement in achieving the company's objectives.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="reason">
              <h5>
                <img width={50} src={aboutIcon1} alt="" /> AUTO LOAN FINANCE
              </h5>
              <p>
                We have partners with leading Banks and Financial Institutions
                which offers loan for new car buyer.
              </p>
            </div>
            <div className="reason">
              <h5>
                <img width={50} src={aboutIcon2} alt="" /> WIDE RANGE OF BRANDS
              </h5>
              <p>
                With a robust selection of popular vehicles on hand, as well as
                leading vehicles from BMW and Ford.
              </p>
            </div>
            <div className="reason">
              <h5>
                <img width={50} src={aboutIcon3} alt="" /> TRUSTED BY THOUSANDS
              </h5>
              <p>
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </p>
            </div>
            <div className="reason">
              <h5>
                <img width={50} src={aboutIcon4} alt="" /> CAR SERVICE & MAINTENANCE
              </h5>
              <p>
                Our service department have well trained mechanics to maintain
                your car to stay safe on the road for many more years.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="reason-img">
              <img src={aboutCar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;