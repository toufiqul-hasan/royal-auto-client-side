import React from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import TrendingCar from "../TrendingCar/TrendingCar";
import WhyUs from "../WhyUs/WhyUs";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <HowItWork />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <TrendingCar />
      </div>
    </div>
  );
};

export default Home;