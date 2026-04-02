/* ============================================================
   FEE DATA PAGE
   - Handles pagination logic for Fee Collection
   - Caches page data in Redux
   - Connects Fee data to GenericTable
============================================================ */

import React, { useEffect } from "react";
import feeData from "../data/dummydata/feedata.json";
import GenericTable from "../../../common/component/GenericTable";
import { FeeColumns } from "../data/configs/feedatacolumns";
import { FeeData } from "../data/interfaces/feedatainterface";

import { useAppDispatch, useAppSelector } from "../../../common/data/GenericTableRedux/tableReduxHooks";
import { setPage, cachePageData } from "../../../common/data/GenericTableRedux/tablesSlice";
import { RootState } from "../../../common/data/redux";

/* ============================================================
   CONFIGURATION CONSTANTS
============================================================ */

// Number of records per page
const PAGE_SIZE = 10;

/* ============================================================
   FEE DATA PAGE COMPONENT
============================================================ */

const FeeDataPage = () => {

  /* ============================================================
     REDUX SETUP
  ============================================================ */

  const dispatch = useAppDispatch();

  const { currentPage, cachedPages } = useAppSelector(
    (state: RootState) => state.tables.FeeCollectionTable
  );

  /* ============================================================
     DERIVED VALUES
  ============================================================ */

  const totalPages = Math.ceil(feeData.length / PAGE_SIZE);

  /* ============================================================
     INITIAL DATA LOAD
  ============================================================ */

  useEffect(() => {
    const isFirstPageCached = cachedPages[0];

    if (!isFirstPageCached) {
      dispatch(
        cachePageData({
          table: "FeeCollectionTable",
          page: 0,
          data: feeData.slice(0, PAGE_SIZE),
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
          table: "FeeCollectionTable",
          page: nextPageIndex,
          data: feeData.slice(startIndex, endIndex),
        })
      );
    }

    dispatch(setPage({ table: "FeeCollectionTable", page: nextPageIndex }));
  };

  /* ============================================================
     HANDLE PREVIOUS PAGE
  ============================================================ */

  const handlePrevious = () => {
    if (currentPage === 0) return;

    dispatch(
      setPage({
        table: "FeeCollectionTable",
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
        table: "FeeCollectionTable",
        page: pageIndex,
        data: feeData.slice(startIndex, endIndex),
      })
    );
  }

  dispatch(
    setPage({
      table: "FeeCollectionTable",
      page: pageIndex,
    })
  );
};

  /* ============================================================
     COMPONENT RENDER
  ============================================================ */

  return (
    <GenericTable<FeeData>
      height="auto"
      data={cachedPages[currentPage] || []}
      columns={FeeColumns}
      currentPage={currentPage}
      totalPages={totalPages}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onPageChange={handlePageChange}
      cachedPages={cachedPages}
      pageSize={PAGE_SIZE}
      actions={{
        onPrint: (row) => console.log("Print :", row),
        onSave: (row) => console.log("Save :", row),
        onSend: (row) => console.log("Send :", row),
      }}
    />
  );
};
 
export default FeeDataPage;
