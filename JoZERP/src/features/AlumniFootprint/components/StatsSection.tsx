import React from "react";
import "../styles/StatsSection.css";

import moneyIcon from "../assets/images/Money.png";
import mentorIcon from "../assets/images/Mentor.png";

const StatsSection: React.FC = () => {
  return (
    <div className="stats-wrapper">
      
      {/* Left Card */}
      <div className="stats-card">
        <div className="stats-left">
          <img src={moneyIcon} alt="Money Icon" className="stats-icon" />
          <div>
            <h3 className="stats-value">₹4.2M</h3>
            <p className="stats-text">
              Annual Alumni Endowments & Research Grants
            </p>
          </div>
        </div>

        <button className="stats-btn">Fundraise Report</button>
      </div>

      {/* Right Card */}
      <div className="stats-card">
        <div className="stats-left">
          <img src={mentorIcon} alt="Mentor Icon" className="stats-icon" />
          <div>
            <h3 className="stats-value">450+</h3>
            <p className="stats-text">
              Active Student Mentors globally
            </p>
          </div>
        </div>

        <button className="stats-btn">Find Mentor</button>
      </div>

    </div>
  );
};

export default StatsSection;