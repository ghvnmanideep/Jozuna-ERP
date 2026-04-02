import React from "react";
import "../styles/PipelineCard.css";
import pipelineIcon from "../../../assets/icons/pipeline.png";

interface Props {
  accepted: number;
  waitlist: number;
}

const PipelineCard: React.FC<Props> = ({ accepted, waitlist }) => {
  return (
    <div className={`dashboard-card pipeline-card`}>
      <div className="card-header">
        <span>Pipeline</span>

        <div className="icon-box">
          <img src={pipelineIcon} alt="pipeline" width="20" height="20" />
        </div>
      </div>

      <div className="pipeline-stats">
        <div className="accepted">
          <h3>{accepted}</h3>
          <p>Accepted</p>
        </div>

        <div className="waitlist">
          <h3>{waitlist}</h3>
          <p>Waitlist</p>
        </div>
      </div>
    </div>
  );
};

export default PipelineCard;