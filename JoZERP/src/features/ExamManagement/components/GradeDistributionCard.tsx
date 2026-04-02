import React from "react";
import "../styles/GradeDistributionCard.css";
import { Strings } from "../../../utils/Strings";
import Barchart from "../../../common/component/Barchart";

import {
  gradeData,
  gradeColors,
  examManagementData
} from "../data/dummydata/examManagement.data";

const GradeDistributionCard: React.FC = () => {

  const { distribution } = examManagementData;

  return (
    <div className="exam-management-distribution-card">
      
      <h3 className="exam-management-distribution-title">
        {Strings.EXAM_MANAGEMENT_STRINGS.distribution.title}
      </h3>

      <div className="exam-management-graph-placeholder">
         <Barchart
        data={gradeData}
        colors={gradeColors}
        visibleCount = {7}
        showTooltip={true}
        showTooltipDetails={true}
        showCompareBar={false}
        height={150}
        margin={{ top:0, right: 0, left: 0, bottom: 10 }}
        barCategoryGap="30%"
        barSize={30}
        tooltipConfig={[
          { label: "Revenue Realized", key: "label" },
          { label: "Paid Students", key: "value" }
        ]}
        // highlightBelowIndex={[4]}
        // tooltipConfig={[
        //   { label: "Revenue Realized", key: "revenue", color: "#B1FACC" },
        //   { label: "Month", key: "month" },
        //   { label: "Paid Students", key: "students" }
        // ]}
      />
      </div>

      <div className="exam-management-distribution-footer">

        <div className="exam-management-footer-left">
          <p>{Strings.EXAM_MANAGEMENT_STRINGS.distribution.distinction}</p>
          <p>{Strings.EXAM_MANAGEMENT_STRINGS.distribution.average}</p>
        </div>

        <div className="exam-management-footer-right">
            <p>
              {distribution.distinctionStudents}{" "}
              {Strings.EXAM_MANAGEMENT_STRINGS.distribution.studentsLabel}
            </p>

            <p>
              {distribution.averageStudents}{" "}
              {Strings.EXAM_MANAGEMENT_STRINGS.distribution.studentsLabel}
            </p>
        </div>

      </div>
    </div>
  );
};

export default GradeDistributionCard;