import React from "react";
import Slider from "react-slick";
import tc1 from "../../Assets/Images/tc1.jpg";
import tc2 from "../../Assets/Images/tc2.jpg";
import tc3 from "../../Assets/Images/tc3.jpg";
import "./TrendingCar.css";

const TrendingCar = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider gray-bg">
      <h2 className="text-center">Trending Cars Of The Year</h2>
      <Slider {...settings}>
        <div>
          <img src={tc1} alt="" />
        </div>
        <div />
        <div>
          <img src={tc2} alt="" />
        </div>
        <div />
        <div>
          <img src={tc3} alt="" />
        </div>
        <div />
      </Slider>
    </div>
  );
};

export default TrendingCar;