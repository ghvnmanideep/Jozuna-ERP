import React from "react";
import OccupancyCard from "./OccupancyCard";
import PipelineCard from "./PipelineCard";
// import CourseChart from "./CourseChart";
import "../styles/dashboard.css";
import ProgramChart from "./ProgramChart";

const DashboardSection: React.FC = () => {
  return (
    <div className="dashboard-section">
      <OccupancyCard occupied={420} total={500} />
      <PipelineCard accepted={382} waitlist={38} />

      <ProgramChart
        programs={[
          { name: "BCA", value: 40 },
          { name: "MCA", value: 70 },
          { name: "MBA (HR)", value: 90 },
          { name: "B.E (Civil)", value: 110 },
          { name: "M.E (Civil)", value: 130 },
        ]}
      />
    </div>
  );
};

export default DashboardSection;