import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../admissions/styles/AdmissionPage.css";
import arrow from "../assets/arrow.png";

import CircularChart from "../../../common/component/Circularchart";
import AdvancedFilterNavbar from "../../../common/component/AdvancedFilterModal";
import CommonBarChart from "../../../common/component/Barchart";
import { Admissiondata } from "../../../common/interface/chartinterface";
import CommonDropdown from "../../../common/component/CommonDropdown";

const AdmissionPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state || {};

  const [campus, setCampus] = useState(data.campus ?? "Campus");
  const [category, setCategory] = useState(data.category ?? "Self-Finance");
  const [year, setYear] = useState(data.year ?? "AY 2025 - 2026");
  const [courseType, setCourseType] = useState("Least 5 Courses");

  const campusList = [
    "Bangalore Central Campus",
    "Knowledge Park Campus",
    "Banyan Court Campus",
    "Sangam Campus",
  ];

  const categoryList = ["Merit", "Self-Finance"];
  const yearList = ["2026 - 2027", "2025 - 2026", "2024 - 2025"];

  return (
    <div className="admission-lifecycle-page">

      {/* HEADER */}
      <div className="admission-lifecycle-header">
        <div className="admission-lifecycle-header-left">
          <h2 className="admission-lifecycle-title-main">
            Admissions Lifecycle
          </h2>
        </div>

        <div className="admission-lifecycle-filters">
          <CommonDropdown value={campus} setValue={setCampus} list={campusList} />
          <CommonDropdown value={category} setValue={setCategory} list={categoryList} />
          <CommonDropdown value={year} setValue={setYear} list={yearList} />
          <AdvancedFilterNavbar />
        </div>
      </div>

      {/* HEADER BOTTOM */}
      <div className="admission-lifecycle-header-bottom">
        <p className="admission-lifecycle-campus-title">All Campus</p>

        <button
          className="admission-lifecycle-view-btn"
          onClick={() =>
            navigate("applicants", {
              state: { campus, category, year },
            })
          }
        >
          View Applicants
        </button>
      </div>

      {/* STATS */}
      <div className="admission-lifecycle-stats">

        <div className="admission-lifecycle-section">
          <div className="admission-lifecycle-left">
            <p className="admission-lifecycle-label">Total Applicants</p>
            <h2 className="admission-lifecycle-value">4,262</h2>
            <p className="admission-lifecycle-sub">12% Vs Last Year</p>
          </div>
          <div className="admission-lifecycle-arrow"></div>
        </div>

        <div className="admission-lifecycle-section">
          <div className="admission-lifecycle-left">
            <p className="admission-lifecycle-label">Admitted</p>
            <h2 className="admission-lifecycle-value">3,420</h2>
            <p className="admission-lifecycle-sub">80.2% Review Rate</p>
          </div>

          <div className="admission-lifecycle-right">
            <div className="admission-lifecycle-pill">Denied <strong>642</strong></div>
            <div className="admission-lifecycle-pill">Waiting List <strong>200</strong></div>
          </div>

          <div className="admission-lifecycle-arrow"></div>
        </div>

        <div className="admission-lifecycle-section">
          <div className="admission-lifecycle-left">
            <p className="admission-lifecycle-label">Accepted</p>
            <h2 className="admission-lifecycle-value admission-lifecycle-highlight">
              2,462
            </h2>
            <p className="admission-lifecycle-green">High Conversion</p>
          </div>

          <div className="admission-lifecycle-right">
            <div className="admission-lifecycle-pill">Declined <strong>642</strong></div>
            <div className="admission-lifecycle-pill">No Response <strong>200</strong></div>
          </div>

          <div className="admission-lifecycle-arrow"></div>
        </div>

        <div className="admission-lifecycle-section">
          <div className="admission-lifecycle-left">
            <p className="admission-lifecycle-label">Enrolled</p>
            <h2 className="admission-lifecycle-value admission-lifecycle-highlight">
              2,150
            </h2>
            <p className="admission-lifecycle-sub">92% Students Paid</p>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="admission-lifecycle-bottom">

        {/* LEFT BARCHART */}
        <div className="admission-lifecycle-barchart-card">
          <div className="admission-lifecycle-card-header">
            <h3 className="admission-lifecycle-barchart-title">
              Unoccupied Seats
            </h3>

            <CommonDropdown
              value={courseType}
              setValue={setCourseType}
              list={["Least 5 Courses", "Top 5 Courses"]}
            />
          </div>

          <h2 className="admission-lifecycle-barchart-value">2150</h2>

    <CommonBarChart
      data={Admissiondata}
      showCompareBar={false}
      showTooltip={true}
      height={200}
      margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
      tooltipConfig={[
                  { label: "Revenue Realized", key: "revenue", color: "#B1FACC" },
                  { label: "Month", key: "month" },
                  { label: "Paid Students", key: "students" }
                ]}

    />
  </div>
 

        {/* ===== RIGHT (PROGRAM CARDS) ===== */}
        <div className="admission-lifecycle-programs">

          {["Under Graduate", "Post Graduate", "Doctoral"].map((program) => (
            <div className="admission-lifecycle-program-card" key={program}>
              <h3 className="admission-lifecycle-program-title">{program}</h3>

              <div className="admission-lifecycle-chart-wrapper">
                <CircularChart
                  percentage={72}
                  size={160}
                  strokeWidth={16}
                  label="Seats occupied"
                />
              </div>
               
              <button className="admission-lifecycle-open-btn">
                <span>Open</span>
                <img src={arrow} alt="arrow" width={20} />
              </button>
            </div>
          ))}

        </div>
      </div>
       
    </div>
  );
};

export default AdmissionPage;