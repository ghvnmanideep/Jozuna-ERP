import React from "react";
import "../styles/ExamSummaryCards.css";
import { Strings } from "../../../utils/Strings";
import { examManagementData } from "../data/dummydata/examManagement.data"; 

import avgGpaIcon from "../assets/gpa-icon.png";
import progressIcon from "../assets/progress-icon.png";
import reevalIcon from "../assets/reeval-icon.png";
import backlogIcon from "../assets/backlog-icon.png";

const ExamSummaryCards: React.FC = () => {

  const { summaryCards } = examManagementData;

  return (
    <div className="exam-management-summary-grid">

      {/* Card 1 */}
      <div className="exam-management-summary-card">
        <div className="exam-management-card-header">
          <h3>{Strings.EXAM_MANAGEMENT_STRINGS.summaryCards.avgGpa}</h3>
          <img
            src={avgGpaIcon}
            alt="Average GPA"
            className="exam-management-card-icon"
          />
        </div>

        <p className="exam-management-summary-value">
          {summaryCards.avgGpa}
        </p>
      </div>

      {/* Card 2 */}
      <div className="exam-management-summary-card">
        <div className="exam-management-card-header">
          <h3>{Strings.EXAM_MANAGEMENT_STRINGS.summaryCards.gradingProgress}</h3>
          <img
            src={progressIcon}
            alt="Grading Progress"
            className="exam-management-card-icon"
          />
        </div>

        <p className="exam-management-summary-value">
          {summaryCards.gradingProgress}
        </p>
      </div>

      {/* Card 3 */}
      <div className="exam-management-summary-card">
        <div className="exam-management-card-header">
          <h3>{Strings.EXAM_MANAGEMENT_STRINGS.summaryCards.reevalRequests}</h3>
          <img
            src={reevalIcon}
            alt="Re-evaluation Requests"
            className="exam-management-card-icon"
          />
        </div>

        <p className="exam-management-summary-value orange">
          {summaryCards.reevalRequests}
        </p>
      </div>

      {/* Card 4 */}
      <div className="exam-management-summary-card">
        <div className="exam-management-card-header">
          <h3>{Strings.EXAM_MANAGEMENT_STRINGS.summaryCards.failedBacklogs}</h3>
          <img
            src={backlogIcon}
            alt="Failed Backlogs"
            className="exam-management-card-icon"
          />
        </div>

        <p className="exam-management-summary-value red">
          {summaryCards.failedBacklogs}
        </p>
      </div>

    </div>
  );
};

export default ExamSummaryCards;