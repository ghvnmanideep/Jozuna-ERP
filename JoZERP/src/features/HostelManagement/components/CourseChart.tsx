import React, { useState } from "react";
import "../styles/CourseChart.css";

const CourseChart: React.FC = () => {

  return (
    <div
      className={`dashboard-card chart-card`}
    >
      <div className="bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default CourseChart;