import React from "react";
import Slider from "react-slick";
import trendingCar1 from "../../Assets/Images/trendingCar1.jpg";
import trendingCar2 from "../../Assets/Images/trendingCar2.jpg";
import trendingCar3 from "../../Assets/Images/trendingCar3.jpg";
import "./TrendingCar.css";

const TrendingCar = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider section-title">
      <h2 className="text-center">Trending Cars</h2>
      <Slider {...settings}>
        <div>
          <img src={trendingCar1} alt="" />
        </div>
        <div />
        <div>
          <img src={trendingCar2} alt="" />
        </div>
        <div />
        <div>
          <img src={trendingCar3} alt="" />
        </div>
        <div />
      </Slider>
    </div>
  );
};

export default TrendingCar;
