/* ============================================================
   EXAMS PAGE
   - Handles pagination logic
   - Caches page data in Redux
   - Connects Exam data to GenericTable
   - Handles row selection (NEW)
============================================================ */

import React, { useEffect } from "react";
import examData from "../../ExamManagement/data/dummydata/examdata.json";
import GenericTable from "../../../common/component/GenericTable";
import { ExamColumns } from "../data/configs/examdata.columns";
import { ExamCourse } from "../data/interfaces/examdata.interface";

import { useAppDispatch, useAppSelector } from "../../../common/data/GenericTableRedux/tableReduxHooks";
import { setPage, cachePageData } from "../../../common/data/GenericTableRedux/tablesSlice";
import { RootState } from "../../../common/data/redux";

/* ============================================================
   CONFIGURATION CONSTANTS
============================================================ */

const PAGE_SIZE = 10;

/* ============================================================
   EXAMS PAGE COMPONENT
============================================================ */

const ExamDataPage = () => {

  /* ============================================================
     REDUX SETUP
  ============================================================ */

  const dispatch = useAppDispatch();

  const { currentPage, cachedPages } = useAppSelector(
    (state: RootState) => state.tables.ExamsDataTable
  );

  /* ============================================================
     LOCAL STATE (SELECTION)
     - Stores selected row IDs
     - Controlled and passed to table
  ============================================================ */

  // const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

  /* ============================================================
     DERIVED VALUES
  ============================================================ */

  const totalPages = Math.ceil(examData.length / PAGE_SIZE);

  /* ============================================================
     INITIAL DATA LOAD
  ============================================================ */

  useEffect(() => {

    const isFirstPageCached = cachedPages[0];

    if (!isFirstPageCached) {
      dispatch(
        cachePageData({
          table: "ExamsDataTable",
          page: 0,
          data: examData.slice(0, PAGE_SIZE),
        })
      );
    }

  }, [cachedPages, dispatch]);

  /* ============================================================
     HANDLE NEXT PAGE
  ============================================================ */

  const handleNext = () => {

    const nextPageIndex = currentPage + 1;

    if (nextPageIndex >= totalPages) return;

    const isNextPageCached = cachedPages[nextPageIndex];

    if (!isNextPageCached) {

      const startIndex = nextPageIndex * PAGE_SIZE;
      const endIndex = startIndex + PAGE_SIZE;

      dispatch(
        cachePageData({
          table: "ExamsDataTable",
          page: nextPageIndex,
          data: examData.slice(startIndex, endIndex),
        })
      );
    }

    dispatch(setPage({ table: "ExamsDataTable", page: nextPageIndex }));
  };

  /* ============================================================
     HANDLE PREVIOUS PAGE
  ============================================================ */

  const handlePrevious = () => {

    if (currentPage === 0) return;

    dispatch(
      setPage({
        table: "ExamsDataTable",
        page: currentPage - 1,
      })
    );
  };

  /* ============================================================
     HANDLE DIRECT PAGE CHANGE
  ============================================================ */

  const handlePageChange = (pageIndex: number) => {

    const isPageCached = cachedPages[pageIndex];

    if (!isPageCached) {

      const startIndex = pageIndex * PAGE_SIZE;
      const endIndex = startIndex + PAGE_SIZE;

      dispatch(
        cachePageData({
          table: "ExamsDataTable",
          page: pageIndex,
          data: examData.slice(startIndex, endIndex),
        })
      );
    }

    dispatch(
      setPage({
        table: "ExamsDataTable",
        page: pageIndex,
      })
    );
  };

  /* ============================================================
     COMPONENT RENDER
  ============================================================ */

  return (

    <GenericTable<ExamCourse>

      /* ================================
         TABLE CONFIG
      ================================= */

      height="600px"

      data={cachedPages[currentPage] || []}
      columns={ExamColumns}

      currentPage={currentPage}
      totalPages={totalPages}
      cachedPages={cachedPages}

      onNext={handleNext}
      onPrevious={handlePrevious}
      onPageChange={handlePageChange}

      /* ================================
         ACTIONS (OPTIONAL)
      ================================= */

      actions={{
        onView: (row) => console.log("View Exam:", row),
      }}

      /* ================================
         SELECTION (NEW FEATURE)
         - Controlled from parent
      ================================= */

      // selection={{
      //   selectedRowIds,
      //   onChange: setSelectedRowIds,
      //   getRowId: (row) => row.courseName, // ⚠️ ensure unique field
      // }}

      // enableSorting = {true}

    />

  );
};

export default ExamDataPage;