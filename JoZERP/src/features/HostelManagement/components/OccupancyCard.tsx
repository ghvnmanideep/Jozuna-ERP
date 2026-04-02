import React from "react";
import "../styles/OccupancyCard.css";
import occupancyIcon from "../../../assets/icons/occupancy.png"

interface Props {
  occupied: number;
  total: number;
}

const OccupancyCard: React.FC<Props> = ({ occupied, total }) => {
  const percentage = Math.round((occupied / total) * 100);

  return (
    <div className="dashboard-card occupancy-card">
      <div className="card-header">
        <span>Occupancy</span>

        <div className="icon-box">
          <img src={occupancyIcon} alt="occupancy" width="18" height="18" />
        </div>
      </div>

      <h2>{occupied} / {total}</h2>

      <div className="progress-container">

        <div className="progress-bar">
          <div
            className="progress-filled"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      

      <span className="percentage">{percentage}%</span>
      </div>
    </div>
  );
};

export default OccupancyCard;