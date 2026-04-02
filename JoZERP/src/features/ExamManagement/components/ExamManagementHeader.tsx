import React from "react";
import "../styles/ExamManagementHeader.css";
import { Strings } from "../../../utils/Strings";
import { examManagementData } from "../data/dummydata/examManagement.data";

const ExamManagementHeader: React.FC = () => {

  const { header } = examManagementData;

  return (
    <div className="exam-management-exam-header">
      <div className="exam-management-exam-header-left">

        <h2 className="exam-management-exam-title">
          {Strings.EXAM_MANAGEMENT_STRINGS.header.title}
        </h2>

        <span className="exam-management-ay-badge">
          {header.academicYear}
        </span>

      </div>
    </div>
  );
};

export default ExamManagementHeader;