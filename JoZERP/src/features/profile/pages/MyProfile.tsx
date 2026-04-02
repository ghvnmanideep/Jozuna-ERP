import React from "react";
import "../styles/profile.css";
import ProfileHeader from "../components/ProfileHeader";
import AccreditationCard from "../components/AccreditationCard";
import RankingCard from "../components/RankingCard";
import InfoField from "../components/InfoField";
import globalRankingImg from "../assets/Global-ranking.png";
import institutionLogo from "../assets/institution-logo.png";

const MyProfile: React.FC = () => {

  const accreditations = [
    { id: 1, name: "NAAC A++", verified: true },
    { id: 2, name: "ISO 9001:2015", verified: true },
  ];

  return (
    <div className="institution-profile">

      <ProfileHeader
        title="Institution Profile"
        status="Status: Active"
      />

      <div className="main-card">

        <img src={institutionLogo} alt="Institution Logo" className="avatar" />

        <div className="institution-fields">
          <InfoField
            label="Institution Name"
            value="Global Institute of Technology"
          />

          <InfoField
            label="Institution Code"
            value="GIT-2026-HQ"
          />
        </div>

      </div>

      <div className="profile-layout">

        <div className="left-column">

          <AccreditationCard accreditations={accreditations} />

          <RankingCard
            title="Global Ranking"
            description="World University Rankings 2026"
            rank={142}
            bgImage={globalRankingImg}
          />

        </div>

        <div className="card general-card">

          <h4>General Information</h4>

          <div className="field-row">
            <InfoField label="Year Established" value="1998" />
            <InfoField
              label="Affiliated University"
              value="State Technical University"
            />
          </div>

          <div className="field-row">
            <InfoField
              label="Registered Address"
              value="123 Tech Park Avenue, Silicon Valley Corridor, Block 4"
              fullWidth
            />
          </div>

          <div className="field-row">
            <InfoField label="Contact Email" value="info@jozunacollege.edu" />
            <InfoField label="Official Website" value="www.jozunacollege.edu" />
          </div>

        </div>

      </div>

    </div>
  );
};

export default MyProfile;