import React, { useEffect } from "react";
import feeData from "../data/dummydata/feeManageTable.json";
import GenericTable from "../../../common/component/GenericTable";
import { FeeColumns } from "../data/configs/feeManageTablecolumns";
import { FeeTableData } from "../data/interface/feeManageTableinterface";

import { useAppDispatch, useAppSelector } from "../../../common/data/GenericTableRedux/tableReduxHooks";
import { setPage, cachePageData } from "../../../common/data/GenericTableRedux/tablesSlice";
import { RootState } from "../../../common/data/redux";

const PAGE_SIZE = 10;

const FeeTablePage = () => {
  const dispatch = useAppDispatch();

  const { currentPage, cachedPages } = useAppSelector(
    (state: RootState) => state.tables.FeeTable   // 👈 IMPORTANT
  );

  const totalPages = Math.ceil(feeData.length / PAGE_SIZE);

  useEffect(() => {
    if (!cachedPages[0]) {
      dispatch(
        cachePageData({
          table: "FeeTable",
          page: 0,
          data: feeData.slice(0, PAGE_SIZE),
        })
      );
    }
  }, [cachedPages, dispatch]);

  const handleNext = () => {
    const next = currentPage + 1;
    if (next >= totalPages) return;

    if (!cachedPages[next]) {
      const start = next * PAGE_SIZE;
      dispatch(
        cachePageData({
          table: "FeeTable",
          page: next,
          data: feeData.slice(start, start + PAGE_SIZE),
        })
      );
    }

    dispatch(setPage({ table: "FeeTable", page: next }));
  };

  const handlePrevious = () => {
    if (currentPage === 0) return;
    dispatch(setPage({ table: "FeeTable", page: currentPage - 1 }));
  };

  const handlePageChange = (page: number) => {
    if (!cachedPages[page]) {
      const start = page * PAGE_SIZE;
      dispatch(
        cachePageData({
          table: "FeeTable",
          page,
          data: feeData.slice(start, start + PAGE_SIZE),
        })
      );
    }

    dispatch(setPage({ table: "FeeTable", page }));
  };

  return (
    <GenericTable<FeeTableData>
      height="360px"
      data={cachedPages[currentPage] || []}
      columns={FeeColumns}
      currentPage={currentPage}
      totalPages={totalPages}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onPageChange={handlePageChange}
      cachedPages={cachedPages}
      actions={{
        onEdit: (row) => console.log("Edit Fee:", row),
        
      
      }}
    />
  );
};

export default FeeTablePage;