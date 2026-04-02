import React, { useEffect } from "react";
import GenericTable from "../../../common/component/GenericTable";

import { AcademicColumns } from "../data/configs/academic.columns";
import { academicData } from "../data/dummydata/academics.data";
import { AcademicCourse } from "../data/interfaces/academics.interface";

import { useAppDispatch, useAppSelector } from "../../../common/data/GenericTableRedux/tableReduxHooks";
import { setPage, cachePageData } from "../../../common/data/GenericTableRedux/tablesSlice";
import { RootState } from "../../../common/data/redux";

import "../styles/Academics.css";

/* =========================
   CONFIG
========================= */
const PAGE_SIZE = 10;

const AcademicTable = () => {

  const dispatch = useAppDispatch();

  const { currentPage, cachedPages } = useAppSelector(
    (state: RootState) => state.tables.AcademicsDataTable
  );

  const totalPages = Math.ceil(academicData.length / PAGE_SIZE);

  /* =========================
     INITIAL LOAD
  ========================= */
  useEffect(() => {
    if (!cachedPages[0]) {
      dispatch(
        cachePageData({
          table: "AcademicsDataTable",
          page: 0,
          data: academicData.slice(0, PAGE_SIZE),
        })
      );
    }
  }, [cachedPages, dispatch]);

  /* =========================
     NEXT
  ========================= */
  const handleNext = () => {
    const nextPage = currentPage + 1;

    if (nextPage >= totalPages) return;

    if (!cachedPages[nextPage]) {
      const start = nextPage * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      dispatch(
        cachePageData({
          table: "AcademicsDataTable",
          page: nextPage,
          data: academicData.slice(start, end),
        })
      );
    }

    dispatch(setPage({ table: "AcademicsDataTable", page: nextPage }));
  };

  /* =========================
     PREVIOUS
  ========================= */
  const handlePrevious = () => {
    if (currentPage === 0) return;

    dispatch(
      setPage({
        table: "AcademicsDataTable",
        page: currentPage - 1,
      })
    );
  };

  /* =========================
     DIRECT PAGE
  ========================= */
  const handlePageChange = (pageIndex: number) => {

    if (!cachedPages[pageIndex]) {
      const start = pageIndex * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      dispatch(
        cachePageData({
          table: "AcademicsDataTable",
          page: pageIndex,
          data: academicData.slice(start, end),
        })
      );
    }

    dispatch(setPage({ table: "AcademicsDataTable", page: pageIndex }));
  };

  /* =========================
     RENDER
  ========================= */

  return (
    <div className="academic-table-card">

      <h4>Course Catalog & Intake Status</h4>

      <GenericTable<AcademicCourse>
        data={cachedPages[currentPage] || []}
        columns={AcademicColumns}
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onPageChange={handlePageChange}
        cachedPages={cachedPages}
        height="240px"
      />

    </div>
  );
};

export default AcademicTable;