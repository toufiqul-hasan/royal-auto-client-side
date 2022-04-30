import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="zindex">
          <div className="row">
            <div className="col-lg-4">
              <div className="banner-content">
                <h1>Find Your Next Car at Royal Auto</h1>
                <p>
                  Allow us to guide you through the innovative stress free
                  approach in finding your dream car.
                </p>
                <button className="button">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;