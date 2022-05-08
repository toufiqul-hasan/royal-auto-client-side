import React from "react";
import team1 from "../../Assets/Images/team1.jpg";
import team2 from "../../Assets/Images/team2.jpg";
import team3 from "../../Assets/Images/team3.jpg";
import "./Team.css";

const Team = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="container">
        <div className="team text-center">
          <h2>
            Meet <span> Our Team </span>
          </h2>
          <hr />
          <p>
            We are committed to total customer satisfaction by identifying their
            specific needs, translating them into Quality vehicles and providing
            dependable after-sales- products. This commitment is the corner
            stone of our Quality Policy and we strive to achieve it by putting
            into place a Quality System.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="team-member">
              <div className="team-img">
                <img src={team1} alt="" />
                <div className="team-more-info">
                  <div className="info-wrap">
                    <p>
                      <span>Phone:</span> +88-016-456-78-123
                    </p>
                    <p>
                      <span>Email:</span> sydnee@royalauto.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h6>Sydnee Olivia</h6>
                <p>Chief Finance Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <div className="team-img">
                <img src={team2} alt="" />
                <div className="team-more-info">
                  <div className="info-wrap">
                    <p>
                      <span>Phone:</span> +88-016-987-65-432
                    </p>
                    <p>
                      <span>Email:</span> alan@royalauto.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h6>Alan Kaden</h6>
                <p>Sales Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <div className="team-img">
                <img src={team3} alt="" />
                <div className="team-more-info">
                  <div className="info-wrap">
                    <p>
                      <span>Phone:</span> +88-016-123-45-678
                    </p>
                    <p>
                      <span>Email:</span> kristina@royalauto.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="team-info">
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