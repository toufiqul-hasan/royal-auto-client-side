import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Team from "../Team/Team";
import ChooseUs from "../ChooseUs/ChooseUs";

const About = () => {
  return (
    <div>
      <div>
        <AboutUs />
      </div>
      <div>
        <ChooseUs />
      </div>
      <div>
        <Team />
      </div>
    </div>
  );
};

export default About;