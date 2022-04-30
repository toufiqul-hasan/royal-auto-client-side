import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ChooseUs from "../ChooseUs/ChooseUs";
import Team from "../Team/Team";

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