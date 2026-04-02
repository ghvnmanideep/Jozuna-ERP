
import React from "react";
import CommonBarChart from "../../../common/component/Barchart";
import '../styles/Feemanagement.css';
import { FeeData } from "../../../common/interface/chartinterface";

import { useState } from "react";
import CommonDropdown from "../../../common/component/CommonDropdown";
import FeeTablePage from "./Feemanagetablepage";

const FeeManagementPage: React.FC = () => {
  const [courseType, setCourseType] = useState("Least 5 Courses");
  

  return (
    <div className="feemanagement-page-container">

      {/* Header */}
      <div className="feemanagement-header">
        <div className="feemanagement-header-left">
          <h1 className="feemanagement-page-title">Financial Configuration</h1>
          <span className="feemanagement-ay-badge">AY 2026-2027</span>
        </div>
        <button className="feemanagement-new-structure-btn">+ New Fee Structure</button>
      </div>

      {/* Two Column Body */}
      <div className="feemanagement-body-layout">

        {/* LEFT */}
        <div className="feemanagement-left-col">

          {/* Cards */}
          <div className="feemanagement-cards-row">
            <div className="feemanagement-card">
              <div className="feemanagement-card-header">
                <span className="feemanagement-card-label">Fee Heads</span>
                <button className="feemanagement-add-btn">+Add</button>
              </div>
              <div className="feemanagement-card-value">12</div>
            </div>

            <div className="feemanagement-card">
              <span className="feemanagement-card-label">Mapping Status</span>
              <div className="feemanagement-card-value feemanagement-mapping-value">98%</div>
            </div>
          </div>

          {/* Revenue + Chart */}
          
            {/* <p className="feemanagement-revenue-label">Projected Revenue</p>
            <h2 className="feemanagement-revenue-amount">₹ 2.4M</h2>
            <div className="feemanagement-dropdown">
              <CommonDropdown
                value={courseType}
                setValue={setCourseType}
                list={["Least 5 Courses", "Top 5 Courses"]}
              />
            </div> */}

          <div className="feemanagement-revenue-section">
            <div className="feemanagement-revenue-header">
              <div>
                <p className="feemanagement-revenue-label">Projected Revenue</p>
                <h2 className="feemanagement-revenue-amount">₹ 2.4M</h2>
              </div>
              <div className="feemanagement-dropdown">
                <CommonDropdown
                  value={courseType}
                  setValue={setCourseType}
                  list={["Least 5 Courses", "Top 5 Courses"]}
                />
              </div>
            </div>


            <div className="chart-flex">
              <CommonBarChart
                data={FeeData}
                height= "100%"
                showCompareBar={false}
                showTooltip={true}
                showTooltipDetails={true}
                tooltipConfig={[
                  { label: "Revenue Realized", key: "revenue", color: "#B1FACC" },
                  { label: "Month", key: "month" },
                  { label: "Paid Students", key: "students" }
                ]}
              />
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="feemanagement-right-col">
          <div className="feemanagement-global-mapping-panel">
            <h3 className="feemanagement-global-mapping-title">Global Fee Mapping</h3>
            <p className="feemanagement-global-mapping-subtitle">
              Assign amounts to combinations of Heads and Types per Year.
            </p>

            <div className="feemanagement-table-section">
            <FeeTablePage />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FeeManagementPage;