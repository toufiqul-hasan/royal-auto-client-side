import React from "react";
import Banner from "../Banner/Banner";
import WhyUs from "../WhyUs/WhyUs";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <WhyUs />
      </div>
    </div>
  );
};

export default Home;
