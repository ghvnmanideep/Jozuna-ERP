import React from "react";
import "../styles/ExamManagementPage.css";
import "../styles/Examglobal.css";

import ExamManagementHeader from "../components/ExamManagementHeader";
import ExamSummaryCards from "../components/ExamSummaryCards";
import GradeDistributionCard from "../components/GradeDistributionCard";
import CourseEvaluationStatus from "../components/CourseEvaluationStatus";

const ExamManagementPage: React.FC = () => {
  return (
    <div className="exam-management-container">

      <div className="exam-management-heading-section">
        <ExamManagementHeader />
      </div>

      <div className="exam-management-top-section">
        <ExamSummaryCards />
        <GradeDistributionCard />
      </div>

      <div className="exam-management-table-section">
        <CourseEvaluationStatus />
      </div>
      

    </div>
  );
};

export default ExamManagementPage;