import React from "react";
import customer1 from "../../Assets/Images/customer1.jpg";
import customer2 from "../../Assets/Images/customer2.jpg";
import customer3 from "../../Assets/Images/customer3.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="row">
        <h2 className="text-center">Our Satisfied Customers</h2>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <blockquote>
            I went in to Royal Auto to test drive a vehicle I was interested in.
            I was immediately greeted and introduced to a sales professional,
            Frances. She did not use any sells pressure tactics on me. We had an
            enjoyable test drive and she allowed me to demo the vehicle's
            capabilities. I would not hesitate to visit this dealership again or
            buy a vehicle.
            <cite>
              <img src={customer1} alt="" />
              Alberto Duncan
            </cite>
          </blockquote>
        </div>
        <div className="col-lg-4">
          <blockquote>
            I took my daughter in to trade in her car for another one. Efrain
            was so helpful and took a lot of time to make sure she got the car
            she wanted. He explained everything to her and went above and beyond
            to make her happy! I will be bringing my other daughter in soon to
            buy her first car. I am one happy Momma! Thank you so much Efrain
            and staff!
            <cite>
              <img src={customer2} alt="" />
              Joana Silva
            </cite>
          </blockquote>
        </div>
        <div className="col-lg-4">
          <blockquote>
            My experience for my purchase was the most easiest and successful
            purchase I have ever done. The Vehicle was advertised and when I
            drove across town they were so accurate with the description and the
            photo was as well. The Customer service was extremely wonderful.
            They deserve more than five star. Thank you so much Royal Auto's
            staff!
            <cite>
              <img src={customer3} alt="" />
              Milton Chapman
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;