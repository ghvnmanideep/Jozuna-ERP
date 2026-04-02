import React from "react";
import "../styles/LeftLogin.css";

import jozunalogo from "../../../assets/icons/jozuna-logo.png";
import examlogo from "../../../assets/icons/exam-logo.png";
import librarylogo from "../../../assets/icons/library-logo.png";

const LeftLogin: React.FC = () => {
  return (
    <div className="left-container">
      <div className="left-content">
    
        <div className="logo-section">
          <div className="logo-placeholder">
            <img src={jozunalogo} alt="Jozuna Logo" className="logo-image" />
          </div>
          <div className="logo-text">
            <h2>JOZUNA</h2>
            <p>CAMPUS ERP</p>
          </div>
        </div>

        <h1 className="title">
          Empowering the next generation of <br />
          scholars and institutes
        </h1>

        <p className="description">
          Access your personalized academic portal to track attendance,<br />
          grades, and campus updates in real-time.
        </p>

        <div className="cards">
          <div className="card">
            <img src={examlogo} alt="Exam Logo" className="card-image" />
            Exam schedules released for Fall 2026
          </div>

          <div className="card">
            <img src={librarylogo} alt="Library Logo" className="card-image" />
            Library clearance deadline: May 15th
          </div>
        </div>
      </div>

      <div className="footer">
        ©️ 2026 Jozuna Management Systems. All rights reserved.
      </div>
    </div>
  );
};

export default LeftLogin;