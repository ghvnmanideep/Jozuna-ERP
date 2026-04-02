import React, { useEffect } from "react";

import { placementCards } from "../data/dummydata/placements.data";
import { Strings } from "../../../utils/Strings";

import trainingSessionIcon from "../assets/training-session-icon.png";
import arrowIcon from "../assets/readiness-arrow-icon.png";

import CircularChart from "../../../common/component/Circularchart";

/* TABLE */
import GenericTable from "../../../common/component/GenericTable";

import { PlacementColumns } from "../data/configs/placement.columns";
import { placementDrivesData } from "../data/dummydata/placementTable.data";
import { PlacementDrive } from "../data/interfaces/placementTable.interface";

import { PlacementCourseColumns } from "../data/configs/placementCourse.columns";
import { placementCourseData } from "../data/dummydata/placementCourse.data";
import { PlacementCourse } from "../data/interfaces/placementCourse.interface";

/* REDUX */
import { useAppDispatch, useAppSelector } from "../../../common/data/GenericTableRedux/tableReduxHooks";
import { setPage, cachePageData } from "../../../common/data/GenericTableRedux/tablesSlice";
import { RootState } from "../../../common/data/redux";

const PAGE_SIZE = 10;

const PlacementSummary = () => {

  const dispatch = useAppDispatch();

  /* REDUX STATE */

  const {
    currentPage: recruitmentPage,
    cachedPages: recruitmentCachedPages
  } = useAppSelector(
    (state: RootState) => state.tables.RecruitmentTable
  );

  const {
    currentPage: coursePage,
    cachedPages: courseCachedPages
  } = useAppSelector(
    (state: RootState) => state.tables.CourseTable
  );

  const recruitmentTotalPages = Math.ceil(placementDrivesData.length / PAGE_SIZE);
  const courseTotalPages = Math.ceil(placementCourseData.length / PAGE_SIZE);

  /* INITIAL LOAD */

  useEffect(() => {
    if (!recruitmentCachedPages[0]) {
      dispatch(
        cachePageData({
          table: "RecruitmentTable",
          page: 0,
          data: placementDrivesData.slice(0, PAGE_SIZE),
        })
      );
    }

    if (!courseCachedPages[0]) {
      dispatch(
        cachePageData({
          table: "CourseTable",
          page: 0,
          data: placementCourseData.slice(0, PAGE_SIZE),
        })
      );
    }
  }, [dispatch, recruitmentCachedPages, courseCachedPages]);

  /* HANDLERS */

  const handleRecruitmentNext = () => {
    const next = recruitmentPage + 1;
    if (next >= recruitmentTotalPages) return;

    if (!recruitmentCachedPages[next]) {
      dispatch(
        cachePageData({
          table: "RecruitmentTable",
          page: next,
          data: placementDrivesData.slice(next * PAGE_SIZE, (next + 1) * PAGE_SIZE),
        })
      );
    }

    dispatch(setPage({ table: "RecruitmentTable", page: next }));
  };

  const handleRecruitmentPrev = () => {
    if (recruitmentPage === 0) return;
    dispatch(setPage({ table: "RecruitmentTable", page: recruitmentPage - 1 }));
  };

  const handleRecruitmentPage = (page: number) => {
    if (!recruitmentCachedPages[page]) {
      dispatch(
        cachePageData({
          table: "RecruitmentTable",
          page,
          data: placementDrivesData.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE),
        })
      );
    }

    dispatch(setPage({ table: "RecruitmentTable", page }));
  };

  const handleCourseNext = () => {
    const next = coursePage + 1;
    if (next >= courseTotalPages) return;

    if (!courseCachedPages[next]) {
      dispatch(
        cachePageData({
          table: "CourseTable",
          page: next,
          data: placementCourseData.slice(next * PAGE_SIZE, (next + 1) * PAGE_SIZE),
        })
      );
    }

    dispatch(setPage({ table: "CourseTable", page: next }));
  };

  const handleCoursePrev = () => {
    if (coursePage === 0) return;
    dispatch(setPage({ table: "CourseTable", page: coursePage - 1 }));
  };

  const handleCoursePage = (page: number) => {
    if (!courseCachedPages[page]) {
      dispatch(
        cachePageData({
          table: "CourseTable",
          page,
          data: placementCourseData.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE),
        })
      );
    }

    dispatch(setPage({ table: "CourseTable", page }));
  };

  /* SUMMARY CARDS */

  const summaryCards = placementCards.filter(
    (card) => card.cardType === "SUMMARY"
  );

  const totalRegistered = 450;
  const skillVerified = 342;
  const trainingPending = 108;

  /* RENDER */

  return (
    <div className="placement-wrapper">

      {/* TOP SECTION */}
      <div className="placement-top-section">

        {/* LEFT */}
        <div className="placement-top-left">
          <div className="placement-summary-grid">

            {summaryCards.map((card) => (
              <div className="placement-summary-card" key={card.id}>

                <div className="placement-summary-icon">
                  <img src={card.icon} alt="" />
                </div>

                <p className="placement-summary-title">
                  {
                    Strings.PLACEMENTS.SUMMARY[
                      card.titleKey as keyof typeof Strings.PLACEMENTS.SUMMARY
                    ]
                  }
                </p>

                <h3 className="placement-summary-value">
                  {card.value}
                </h3>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT */}
        <div className="placement-top-right">

          <div className="placement-cohort-card">

            <div className="placement-cohort-header">

              <h4 className="placement-cohort-title">
                {Strings.PLACEMENTS.COHORT.TITLE}
              </h4>

              <button className="placement-readiness-btn">
                {Strings.PLACEMENTS.COHORT.VIEW_REPORT}
                <span className="placement-btn-arrow">
                  <img src={arrowIcon} alt="arrow" />
                </span>
              </button>

            </div>

            <div className="placement-cohort-content">

              <div className="placement-cohort-chart">
                <CircularChart
                  percentage={80}
                  size={180}
                  strokeWidth={18}
                  label={Strings.PLACEMENTS.COHORT.LABELS.JOB_READY}
                  minColour="#CFEDE1"
                  maxColour="#3EB97F"
                  trigerredFrom={false}
                />
              </div>

              <div className="placement-cohort-stats">

                <div className="placement-stat-row">
                  <span>{Strings.PLACEMENTS.COHORT.LABELS.TOTAL_REGISTERED}</span>
                  <b>{totalRegistered}</b>
                </div>

                <div className="placement-stat-row">
                  <span>{Strings.PLACEMENTS.COHORT.LABELS.SKILL_VERIFIED}</span>
                  <b>{skillVerified}</b>
                </div>

                <div className="placement-stat-row">
                  <span>{Strings.PLACEMENTS.COHORT.LABELS.TRAINING_PENDING}</span>
                  <b>{trainingPending}</b>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="placement-bottom-section">

        <div className="placement-bottom-left">

          {/* Recruitment Table */}
          <div className="placement-large-card">
            <h4 className="placement-card-title">
              {Strings.PLACEMENTS.TABLES.RECRUITMENT_DRIVES}
            </h4>

            <GenericTable<PlacementDrive>
              height="310px"
              data={recruitmentCachedPages[recruitmentPage] || []}
              columns={PlacementColumns}
              currentPage={recruitmentPage}
              totalPages={recruitmentTotalPages}
              onNext={handleRecruitmentNext}
              onPrevious={handleRecruitmentPrev}
              onPageChange={handleRecruitmentPage}
              cachedPages={recruitmentCachedPages}
            />
          </div>

          {/* Course Table */}
          <div className="placement-large-card">
            <h4 className="placement-card-title">
              {Strings.PLACEMENTS.TABLES.COURSE_DRIVES}
            </h4>

            <GenericTable<PlacementCourse>
              height="290px"
              data={courseCachedPages[coursePage] || []}
              columns={PlacementCourseColumns}
              currentPage={coursePage}
              totalPages={courseTotalPages}
              onNext={handleCourseNext}
              onPrevious={handleCoursePrev}
              onPageChange={handleCoursePage}
              cachedPages={courseCachedPages}
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="placement-bottom-right">

          <div className="placement-right-card placement-green-card">
            <div className="placement-card-header">
              <div className="placement-card-icon-wrapper green-bg">
                <img src={trainingSessionIcon} alt="" />
              </div>
              <h4>{Strings.PLACEMENTS.RIGHT_SECTION.PRE_PLACEMENT_TITLE}</h4>
            </div>
            <p>{Strings.PLACEMENTS.RIGHT_SECTION.PRE_PLACEMENT_DESC}</p>
          </div>

          <div className="placement-right-card placement-blue-card">
            <div className="placement-card-header">
              <div className="placement-card-icon-wrapper blue-bg"></div>
              <h4>{Strings.PLACEMENTS.RIGHT_SECTION.POLICY_TITLE}</h4>
            </div>
            <p>{Strings.PLACEMENTS.RIGHT_SECTION.POLICY_DESC}</p>
          </div>

          <div className="placement-right-card placement-grey-card">
            <h4>{Strings.PLACEMENTS.RIGHT_SECTION.TOP_RECRUITERS_TITLE}</h4>
            <div className="placement-recruiter-tags">
              {Strings.PLACEMENTS.RIGHT_SECTION.RECRUITERS.map((c: string) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PlacementSummary;