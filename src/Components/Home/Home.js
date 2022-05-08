import React from "react";
import Banner from "../Banner/Banner";
import FeaturedCars from "../FeaturedCars/FeaturedCars";
import HowItWork from "../HowItWork/HowItWork";
import Testimonial from "../Testimonial/Testimonial";
import TrendingCar from "../TrendingCar/TrendingCar";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <FeaturedCars />
      </div>
      <div>
        <HowItWork />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <TrendingCar />
      </div>
    </div>
  );
};

export default Home;