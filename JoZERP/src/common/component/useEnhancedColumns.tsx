/* ============================================================
   COLUMN ENHANCEMENT HOOK
   FEATURES:
   - Selection Column
   - Action Column
   - Sorting Control
   - Dynamic Width Normalization
============================================================ */

import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import CustomTooltip from "./tooltips/CustomTooltip";
import viewIcon from "../images/view-icon.png";
import EditIcon from "../images/Edit-icon.png";
import printIcon from "../images/print-icon.png";
import saveIcon from "../images/save-icon.png";
import sendIcon from "../images/send-icon.png";
import "../../styles/GenericTable.css";

/* ============================================================
   HOOK: useEnhancedColumns
============================================================ */

export function useEnhancedColumns<T>({
  columns,
  actions,
  selection,
  data,
  enableSorting,
}: any): ColumnDef<T, any>[] {

  return useMemo(() => {

    /* ============================================================
       BASE COLUMNS
    ============================================================ */

    let baseColumns = [...columns];

    /* ============================================================
       DISABLE SORTING IF NOT ENABLED
    ============================================================ */

    if (!enableSorting) {
      baseColumns = baseColumns.map((col) => ({
        ...col,
        enableSorting: false,
      }));
    }

    /* ============================================================
       ADD SELECTION COLUMN
    ============================================================ */

   if (selection) {
  baseColumns.unshift({
    id: "selection",

    accessorFn: (row: T) => {
      const id = selection.getRowId(row);
      return selection.selectedRowIds.includes(id) ? 1 : 0;
    },

    header: () => {
      const allIds = data.map((row: T) =>
        selection.getRowId(row)
      );

      const isAllSelected =
        allIds.length > 0 &&
        allIds.every((id: any) =>
          selection.selectedRowIds.includes(id)
        );

      return (
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={isAllSelected}
          onChange={(e) =>
            selection.onChange(e.target.checked ? allIds : [])
          }
        />
      );
    },

    size: 7,
   
        enableSorting : enableSorting?? false ,

    cell: ({ row }: any) => {
      const rowData = row.original as T;
      const id = selection.getRowId(rowData);

      const isSelected =
        selection.selectedRowIds.includes(id);

      return (
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={isSelected}
          onChange={(e) => {
            let updated = [...selection.selectedRowIds];

            if (e.target.checked) {
              if (!updated.includes(id)) {
                updated.push(id);
              }
            } else {
              updated = updated.filter((r) => r !== id);
            }

            selection.onChange(updated);
          }}
        />
      );
    },
  });
}

    /* ============================================================
       WIDTH CALCULATION
    ============================================================ */

    let reservedWidth = 0;

    if (selection) reservedWidth += 5;
    if (actions) reservedWidth += 10;

    const availableWidth = 100 - reservedWidth;

    const totalDefined = baseColumns.reduce(
      (sum, col) => sum + (col.size || 0),
      0
    );

    const totalColumns = baseColumns.length;

    let normalizedColumns: ColumnDef<T, any>[] = [];

    if (totalDefined === 0) {
      const equalWidth = availableWidth / totalColumns;

      normalizedColumns = baseColumns.map((col) => ({
        ...col,
        size: equalWidth,
      }));

    } else if (totalDefined < availableWidth) {
      const remaining = availableWidth - totalDefined;
      const extra = remaining / totalColumns;

      normalizedColumns = baseColumns.map((col) => ({
        ...col,
        size: (col.size || 0) + extra,
      }));

    } else if (totalDefined > availableWidth) {
      normalizedColumns = baseColumns.map((col) => ({
        ...col,
        size:
          ((col.size || 0) / totalDefined) * availableWidth,
      }));

    } else {
      normalizedColumns = baseColumns;
    }

    /* ============================================================
       ACTION COLUMN
    ============================================================ */

    if (actions) {
      normalizedColumns.push({
        id: "actions",
        header: "Action",
        size: 10,
        enableSorting: false,

        cell: ({ row }) => {
          const rowData = row.original as T;

          return (
            <div className="actions">
              {actions?.onView && (
                <CustomTooltip title="View" placement="top">
                  <button
                    className="action-btn"
                    onClick={() => actions.onView?.(rowData)}
                  >
                    <img src={viewIcon} alt="view" />
                  </button>
                </CustomTooltip>
              )}
              {actions?.onEdit && (
                <CustomTooltip title="Edit" placement="top">
                  <button
                    className="action-btn"
                    onClick={() => actions.onEdit?.(rowData)}
                  >
                    <img src={EditIcon} alt="Edit" />
                  </button>
                </CustomTooltip>
              )}
              {actions?.onPrint && (
                <CustomTooltip title="Print" placement="top">
                  <button
                    className="action-btn"
                    onClick={() => actions.onPrint?.(rowData)}
                  >
                    <img src={printIcon} alt="Print" />
                  </button>
                </CustomTooltip>
              )}
              {actions?.onSend && (
                <CustomTooltip title="Send" placement="top">
                  <button
                    className="action-btn"
                    onClick={() => actions.onSend?.(rowData)}
                  >
                    <img src={sendIcon} alt="Send" />
                  </button>
                </CustomTooltip>
              )}
              {actions?.onSave && (
                <CustomTooltip title="Save" placement="top">
                  <button
                    className="action-btn"
                    onClick={() => actions.onSave?.(rowData)}
                  >
                    <img src={saveIcon} alt="Save" />
                  </button>
                </CustomTooltip>
              )}
            </div>
          );
        },
      });
    }

    return normalizedColumns;

  }, [columns, actions, selection, data, enableSorting]);
}