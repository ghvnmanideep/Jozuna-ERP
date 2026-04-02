import React from "react";
import { ProfileHeaderProps } from "../interfaces/profileheader.interface";

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ title, status }) => {
  return (
    <div className="profile-header">
      <div className="header-left">
        <h2>{title}</h2>
        <span className="status">{status}</span>
      </div>

      <button className="edit-btn">Edit</button>
    </div>
  );
};

export default ProfileHeader;