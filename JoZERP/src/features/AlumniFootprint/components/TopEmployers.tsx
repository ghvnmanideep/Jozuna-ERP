import React from "react";
import { Employer } from "../types/employers";
import "../styles/TopEmployers.css";

import googleLogo from "../assets/images/google.png";
import amazonLogo from "../assets/images/amazon.png";
import microsoftLogo from "../assets/images/microsoft.png";
import appleLogo from "../assets/images/apple.png";
import metaLogo from "../assets/images/meta.png";
import startupsLogo from "../assets/images/startups.png";

const logoMap: Record<string, string> = {
  Google: googleLogo,
  Amazon: amazonLogo,
  Microsoft: microsoftLogo,
  Apple: appleLogo,
  Meta: metaLogo,
  Startups: startupsLogo,
};

const employersData: Employer[] = [
  { id: 1, name: "Google", count: 142 },
  { id: 2, name: "Amazon", count: 82 },
  { id: 3, name: "Microsoft", count: 55},
  { id: 4, name: "Apple", count: 16 },
  { id: 5, name: "Meta", count: 45 },
  { id: 6, name: "Startups", count: 210 },
];

const TopEmployers: React.FC = () => {
  return (
    <div className="employers-section">
      <h2 className="section-title">Top Employers</h2>

      <div className="employers-grid">
        {employersData.map((emp) => {
          const displayCount =
            emp.id === 6 ? `${emp.count}+` : emp.count.toString();

          return (
            <div key={emp.id} className="employer-card">
              <img
                src={logoMap[emp.name]}
                alt={emp.name}
                className="logo-img"
              />

              <div className="text-content">
                <h3 className="count">{displayCount}</h3>
                <p className="company">{emp.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopEmployers;