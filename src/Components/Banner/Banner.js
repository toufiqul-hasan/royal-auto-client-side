import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="banner-zindex">
          <div className="row">
            <div className="col-lg-4">
              <div className="banner-content">
                <h1>Find Your Next Dream Car at Royal Auto</h1>
                <p>
                  Allow us to guide you through the innovative stress free
                  approach in finding your dream car.
                </p>
                <Link to="/about">
                  <button className="primary-button">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;