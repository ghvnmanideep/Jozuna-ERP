/* ============================================================
   GENERIC TABLE COMPONENT
   FEATURES:
   - Sorting Support (TanStack)
   - Smart Pagination (with ellipsis)
   - Optional Action Column and Selection Feature
   - Overflow Detection with Tooltip
   - Auto Page Switch on Scroll if Next page cached
============================================================ */

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  SortingState,
} from "@tanstack/react-table";

import { useState, useRef, useEffect } from "react";

import { GenericTableProps } from "../interface/GenericTable.types";

import "../../styles/GenericTable.css";

/* ================================
   CUSTOM HOOKS
================================ */
import { useEnhancedColumns } from "./useEnhancedColumns";
import { FaSort } from "react-icons/fa";

/* ============================================================
   GENERIC TABLE
============================================================ */

function GenericTable<T>({
  data,
  columns,
  currentPage,
  totalPages,
  cachedPages,
  onNext,
  onPrevious,
  onPageChange,
  pageSize,
  onPageSizeChange,
  actions,
  selection,
  enableSorting,
  height,
}: GenericTableProps<T>) {

  const [sorting, setSorting] = useState<SortingState>([]);

  const tableBodyRef = useRef<HTMLDivElement>(null);

  /* ============================================================
     RESET SCROLL WHEN PAGE CHANGES
  ============================================================ */

  useEffect(() => {
    if (tableBodyRef.current) {
      tableBodyRef.current.scrollTop = 0;
    }
  }, [currentPage]);

  /* ============================================================
     AUTO MOVE TO NEXT PAGE WHEN SCROLL BOTTOM
  ============================================================ */

  useEffect(() => {
    const element = tableBodyRef.current;
    if (!element) return;

    const handleScroll = () => {
      const reachedBottom =
        element.scrollTop + element.clientHeight >= element.scrollHeight - 5;

      const nextPageExists = cachedPages[currentPage + 1];

      if (reachedBottom && nextPageExists) {
        onNext();
      }
    };

    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, [currentPage, cachedPages, onNext]);

  /* ============================================================
     COLUMN ENHANCEMENT (EXTRACTED)
  ============================================================ */

  const enhancedColumns = useEnhancedColumns({
    columns,
    actions,
    selection,
    data,
    enableSorting,
  });

  /* ============================================================
     TABLE INSTANCE
  ============================================================ */

  const table = useReactTable({
    data,
    columns: enhancedColumns,
    state: enableSorting ? { sorting } : {},
    onSortingChange: enableSorting ? setSorting : undefined,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getCoreRowModel: getCoreRowModel(),
  });

  /* ============================================================
     PAGINATION RANGE CALCULATION
     - Handles ellipsis (...)
  ============================================================ */

  const getPaginationRange = (): Array<number | "..."> => {
    const SIBLING_PAGE_COUNT = 1;

    const paginationRange: Array<number | "..."> = [];

    const firstPageIndex = 0;
    const lastPageIndex = totalPages - 1;

    const leftSiblingIndex = Math.max(
      firstPageIndex,
      currentPage - SIBLING_PAGE_COUNT
    );

    const rightSiblingIndex = Math.min(
      lastPageIndex,
      currentPage + SIBLING_PAGE_COUNT
    );

    if (leftSiblingIndex > firstPageIndex) {
      paginationRange.push(firstPageIndex);

      if (leftSiblingIndex > firstPageIndex + 1) {
        paginationRange.push("...");
      }
    }

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      paginationRange.push(i);
    }

    if (rightSiblingIndex < lastPageIndex) {
      if (rightSiblingIndex < lastPageIndex - 1) {
        paginationRange.push("...");
      }

      paginationRange.push(lastPageIndex);
    }

    return paginationRange;
  };

  /* ============================================================
     SORT ICON
  ============================================================ */

  const renderSortIcon = (column: any) => {
    if (!column.getCanSort()) return null;
    return <FaSort size={12} opacity={0.6} className="icon" />;
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <div className="table-wrapper" style={{ height: height || "100%" }}>
      <div className="table-card">

        {/* ================= HEADER ================= */}

        <div className="table-header">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <div
                key={header.id}
                className="table-cell header-cell"
                style={{
                  width: header.column.columnDef.size
                    ? `${header.column.columnDef.size}%`
                    : undefined,
                }}
              >
                <div
                  className={`header-content ${header.column.id === "actions"
                      ? "action-header-content"
                      : ""
                    }`}
                >

                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                  {enableSorting && (
                    <span
                      className={`sort-icon ${header.column.getIsSorted() ? "active" : ""
                        }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        header.column.toggleSorting();
                      }}
                    >
                      {renderSortIcon(header.column)}
                    </span>
                  )}

                </div>
              </div>
            ))
          )}
        </div>

        {/* ================= BODY ================= */}

        <div className="table-body" ref={tableBodyRef}>
          {table.getRowModel().rows.map((row) => (
            <div key={row.id} className="table-row">
              {row.getVisibleCells().map((cell) => (
                <div
                  key={cell.id}
                  className="table-cell"
                  style={{
                    width: cell.column.columnDef.size
                      ? `${cell.column.columnDef.size}%`
                      : undefined,
                  }}
                >
                  {flexRender(
                    cell.column.columnDef.cell ??
                    ((info: any) => info.getValue()),
                    cell.getContext()
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ================= PAGINATION ================= */}

        <div className="pagination">

          {/* ================= PREVIOUS ================= */}
          <button onClick={onPrevious} disabled={currentPage === 0}>
            Previous
          </button>

          {/* ================= PAGE NUMBERS ================= */}
          <div className="page-numbers">
            {getPaginationRange().map((item, index) => {

              if (item === "...") {
                return (
                  <span key={`ellipsis-${index}`} className="ellipsis">
                    ...
                  </span>
                );
              }

              const pageIndex = item;

              return (
                <button
                  key={pageIndex}
                  onClick={() => onPageChange(pageIndex)}
                  className={`page-number ${currentPage === pageIndex ? "active" : ""
                    }`}
                >
                  {pageIndex + 1}
                </button>
              );
            })}
          </div>

          {/* ================= PAGE SIZE ================= */}
          {pageSize && onPageSizeChange && (
            <div className="rows-per-page">

              <span>Rows per page:</span>

              <select
                value={pageSize}
                onChange={(e) => onPageSizeChange(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>

            </div>
          )}

          {/* ================= NEXT ================= */}
          <button
            onClick={onNext}
            disabled={currentPage >= totalPages - 1}
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
}

export default GenericTable;