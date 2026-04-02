import React from "react";
import Header from "../components/Header";
import DashboardSection from "../components/DashboardSection";
import RoomAllocation from "../components/RoomAllocation";
import "../styles/HostelManagement.css";

const HostelManagementPage: React.FC = () => {
  return (
    <div className="hostel-page">
      {                      }
      <Header />
      <div className="hostel-content">
        <DashboardSection />
        <RoomAllocation />
      </div>
    </div>
  );
};

export default HostelManagementPage;