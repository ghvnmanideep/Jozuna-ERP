import React from "react";
import { AccreditationCardProps } from "../interfaces/accreditation.interface";

const AccreditationCard: React.FC<AccreditationCardProps> = ({ accreditations }) => {
  return (
    <div className="card">

      <h4 className="accreditation-title">Accreditations</h4>

      {accreditations.map((acc) => (
        <div className="accreditation-row" key={acc.id}>
          <span className="accreditation-name">{acc.name}</span>

          {acc.verified && (
            <div className="verified">
              <span className="verified-icon">✓</span>
              VERIFIED
            </div>
          )}
        </div>
      ))}

      <button className="add-btn">+ Add New</button>

    </div>
  );
};

export default AccreditationCard;