import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import GenericTable from "../../../common/component/GenericTable";
import CommonDropdown from "../../../common/component/CommonDropdown";
import AdvancedFilterNavbar from "../../../common/component/AdvancedFilterModal";

import { applicantsColumns } from "../data/applicants.columns";
import { applicantsData, Applicant } from "../data/applicants.data";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/data/GenericTableRedux/tableReduxHooks";

import {
  setPage,
  cachePageData,
} from "../../../common/data/GenericTableRedux/tablesSlice";

import { RootState } from "../../../common/data/redux";

import "../styles/ApplicantsPage.css";
import backArrow from "../assets/back-arrow.png";
import approveIcon from "../../admissions/assets/approved (2).png";
import rejectIcon from "../../admissions/assets/rejected (2).png";
import waitlistIcon from "../../admissions/assets/wait listed (2).png";

const PAGE_SIZE = 10;

const ApplicantsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const data = location.state || {};

  /* ================= FILTER STATES ================= */
  const [campus, setCampus] = useState(data.campus ?? "Campus");
  const [category, setCategory] = useState(data.category ?? "Self-Finance");
  const [year, setYear] = useState(data.year ?? "AY 2025 - 2026");

  const campusList = [
    "Bangalore Central Campus",
    "Knowledge Park Campus",
    "Banyan Court Campus",
    "Sangam Campus",
  ];

  const categoryList = ["Self-Finance", "Merit"];
  const yearList = ["2026 - 2027", "2025 - 2026", "2024 - 2025"];

  /* ================= TABLE STATE ================= */
  const { currentPage, cachedPages } = useAppSelector(
    (state: RootState) => state.tables.ApplicantsDataTable
  );

  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const [hoverAction, setHoverAction] = useState<string | null>(null);

  const totalPages = Math.ceil(applicantsData.length / PAGE_SIZE);

  /* ================= INITIAL LOAD ================= */
  useEffect(() => {
    if (!cachedPages[0]) {
      dispatch(
        cachePageData({
          table: "ApplicantsDataTable",
          page: 0,
          data: applicantsData.slice(0, PAGE_SIZE),
        })
      );
    }
  }, [cachedPages, dispatch]);

  /* ================= PAGINATION ================= */
  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage >= totalPages) return;

    if (!cachedPages[nextPage]) {
      const start = nextPage * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      dispatch(
        cachePageData({
          table: "ApplicantsDataTable",
          page: nextPage,
          data: applicantsData.slice(start, end),
        })
      );
    }

    dispatch(setPage({ table: "ApplicantsDataTable", page: nextPage }));
  };

  const handlePrevious = () => {
    if (currentPage === 0) return;

    dispatch(
      setPage({
        table: "ApplicantsDataTable",
        page: currentPage - 1,
      })
    );
  };

  const handlePageChange = (pageIndex: number) => {
    if (!cachedPages[pageIndex]) {
      const start = pageIndex * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      dispatch(
        cachePageData({
          table: "ApplicantsDataTable",
          page: pageIndex,
          data: applicantsData.slice(start, end),
        })
      );
    }

    dispatch(
      setPage({
        table: "ApplicantsDataTable",
        page: pageIndex,
      })
    );
  };

  /* ================= CURRENT PAGE DATA ================= */
  const currentPageData = cachedPages[currentPage] || [];

  /* ================= HEADER SELECT CHECK ================= */
  const isHeaderSelected =
    currentPageData.length > 0 &&
    currentPageData.every((row: Applicant) =>
      selectedRowIds.includes(row.applicantNo)
    );

  /* ================= ACTIONS ================= */
  const handleApprove = () => console.log("Approved:", selectedRowIds);
  const handleReject = () => console.log("Rejected:", selectedRowIds);
  const handleWaitlist = () => console.log("Waitlisted:", selectedRowIds);

  /* ================= UI ================= */
  return (
    <div className="applicants-page">

      {/* ================= HEADER ================= */}
      <div className="applicants-header">

        {/* LEFT SIDE */}
        <div className="topbar-left">
          <button
            className="back-btn"
            onClick={() =>
              navigate("/dashboard/admissions", {
                state: { campus, category, year },
              })
            }
          >
            <img src={backArrow} alt="back" className="back-icon" />
            Back
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="applicants-filters">

          {/* ✅ ACTION BUTTONS + DIVIDER */}
          {isHeaderSelected && (
            <>
              <div className="action-buttons">

  {/* APPROVE */}
  <button
    className={`icon-btn ${hoverAction === "approve" ? "expanded" : ""}`}
    onMouseEnter={() => setHoverAction("approve")}
    onMouseLeave={() => setHoverAction(null)}
    onClick={handleApprove}
  >
    <img src={approveIcon} alt="approve" />
    {hoverAction === "approve" && <span>Approve Selected</span>}
  </button>

  {/* REJECT */}
  <button
    className={`icon-btn ${hoverAction === "reject" ? "expanded" : ""}`}
    onMouseEnter={() => setHoverAction("reject")}
    onMouseLeave={() => setHoverAction(null)}
    onClick={handleReject}
  >
    <img src={rejectIcon} alt="reject" />
    {hoverAction === "reject" && <span>Rejected Selected</span>}
  </button>

  {/* WAITLIST */}
  <button
    className={`icon-btn ${hoverAction === "wait" ? "expanded" : ""}`}
    onMouseEnter={() => setHoverAction("wait")}
    onMouseLeave={() => setHoverAction(null)}
    onClick={handleWaitlist}
  >
    <img src={waitlistIcon} alt="wait" />
    {hoverAction === "wait" && <span>Wait List Selected</span>}
  </button>

</div>

              <div className="divider"></div>
            </>
          )}

          {/* DROPDOWNS */}
          <CommonDropdown value={campus} setValue={setCampus} list={campusList} />
          <CommonDropdown value={category} setValue={setCategory} list={categoryList} />
          <CommonDropdown value={year} setValue={setYear} list={yearList} />

          <AdvancedFilterNavbar />

          {/* EXPORT */}
          <div className="export-btn">
            <span className="export-text">Export</span>
            <span className="export-divider"></span>
            <span className="export-icon">▼</span>
          </div>

        </div>

      </div>

      {/* ================= TABLE ================= */}
      <GenericTable<Applicant>
        height="auto"
        data={currentPageData}
        columns={applicantsColumns}
        currentPage={currentPage}
        totalPages={totalPages}
        cachedPages={cachedPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onPageChange={handlePageChange}
        selection={{
          selectedRowIds,
          onChange: setSelectedRowIds,
          getRowId: (row: Applicant) => row.applicantNo,
        }}
        enableSorting={true}
      />

    </div>
  );
};

export default ApplicantsPage;