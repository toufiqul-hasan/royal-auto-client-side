import React from "react";
import a1 from "../../Assets/Images/a1.jpg";
import a2 from "../../Assets/Images/a2.jpg";
import a3 from "../../Assets/Images/a3.jpg";
import a4 from "../../Assets/Images/a4.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="about-us text-center">
          <h2>
            Welcome To <span>Royal Auto</span>
          </h2>
          <hr />
          <p>
            With new vision in the vehicles trade we started our journey in the
            name of
            <span>
              <b> Royal Auto </b>
            </span>
            in the year 1995. Quality that customer always looking for, we are
            concentrating on that. Now, we are one of the biggest Automobiles
            importers, whole-sellers and retailers in this country consisting
            three showroom. Both of our showrooms are established at our own
            building in the prime places of the capital.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="about-content row">
              <div className="col-md-5 col-sm-4 col-xs-4">
                <div className="about-img">
                  <img src={a1} alt="" />
                </div>
              </div>
              <div className="col-md-7 col-sm-8 col-xs-8">
                <h3>
                  Who <span>Are We</span>
                </h3>
                <p>
                  We are Royal Auto. With new vision in the vehicles trade we
                  started our journey in the name of Royal Auto in the year
                  1995.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="about-content row">
              <div className="col-md-5 col-sm-4 col-xs-4">
                <div className="about-img">
                  <img src={a2} alt="" />
                </div>
              </div>
              <div className="col-md-7 col-sm-8 col-xs-8">
                <h3>
                  Our <span>Mission</span>
                </h3>
                <p>
                  We work hard to ensure you that you get the best car in the
                  city within your budget. So leave it to us & live tension
                  free.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="about-content row">
              <div className="col-md-5 col-sm-4 col-xs-4">
                <div className="about-img">
                  <img src={a3} alt="" />
                </div>
              </div>
              <div className="col-md-7 col-sm-8 col-xs-8">
                <h3>
                  What <span>We Do</span>
                </h3>
                <p>
                  We sell top notch cars. We are one of the biggest Automobiles
                  importers, whole sellers and retailers in this country.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="about-content row">
              <div className="col-md-5 col-sm-4 col-xs-4">
                <div className="about-img">
                  <img src={a4} alt="" />
                </div>
              </div>
              <div className="col-md-7 col-sm-8 col-xs-8">
                <h3>
                  Our <span>Vision</span>
                </h3>
                <p>
                  In future we will import our vehicles from world famous
                  company so that we can meet our customer demand & desire
                  easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;