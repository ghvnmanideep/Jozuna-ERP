import React from "react";
import "../styles/CourseEvaluationStatus.css";
import ExamDataPage from "../pages/ExamDataPage";
import { Strings } from "../../../utils/Strings";
const CourseEvaluationStatus: React.FC = () => {
  return (
    <div className="exam-management-evaluation-wrapper">
      <div className="exam-management-evaluation-card">

        <h4 className="exam-management-evaluation-title">
          {Strings.EXAM_MANAGEMENT_STRINGS.evaluation.title}
        </h4>

        <div className="exam-management-table-placeholder">
          <ExamDataPage></ExamDataPage>
        </div>

      </div>
    </div>
  );
};

export default CourseEvaluationStatus;