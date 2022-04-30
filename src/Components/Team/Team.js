import React from "react";
import t1 from "../../Assets/Images/t1.jpg";
import t2 from "../../Assets/Images/t2.jpg";
import t3 from "../../Assets/Images/t3.jpg";
import "./Team.css";

const Team = () => {
  return (
    <div class="mt-5 mb-5">
      <div class="container">
        <div class="team text-center">
          <h2>
            Meet Our <span> Team Member </span>
          </h2>
          <hr />
          <p>
            We are committed to total customer satisfaction by identifying their
            specific needs, translating them into Quality vehicles and providing
            dependable after-sales- services. This commitment is the corner
            stone of our Quality Policy and we strive to achieve it by putting
            into place a Quality System.
          </p>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <div class="team-member">
              <div class="team-img">
                <img src={t1} alt="" />
                <div class="team-more-info">
                  <div class="info-wrap">
                    <p>
                      <span>Phone:</span> +88-016-456-78-123
                    </p>
                    <p>
                      <span>Email:</span> sydnee@royalauto.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="team-info">
                <h6>Sydnee Olivia</h6>
                <p>Chief Finance Manager</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="team-member">
              <div class="team-img">
                <img src={t2} alt="" />
                <div class="team-more-info">
                  <div class="info-wrap">
                    <p>
                      <span>Phone:</span> +88-016-987-65-432
                    </p>
                    <p>
                      <span>Email:</span> alan@royalauto.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="team-info">
                <h6>Alan Kaden</h6>
                <p>Sales Manager</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="team-member">
              <div class="team-img">
                <img src={t3} alt="" />
                <div class="team-more-info">
                  <div class="info-wrap">
                    <p>
                      <span>Phone:</span> +88-016-123-45-678
                    </p>
                    <p>
                      <span>Email:</span> kristina@royalauto.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="team-info">
                <h6>Kristina Emmalee</h6>
                <p>Executive Vice President</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;