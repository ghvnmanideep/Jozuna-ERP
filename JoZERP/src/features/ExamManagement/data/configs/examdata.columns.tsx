import { ColumnDef } from "@tanstack/react-table";
import { ExamCourse } from "../interfaces/examdata.interface";
import "../../styles/status.css";
import OverflowTooltip from "../../../../common/component/tooltips/OverflowTooltip";

/* ============================================================
   EXAM TABLE COLUMNS
   - Uses OverflowTooltip (self-contained)
   - No parent tooltip dependency
============================================================ */

export const ExamColumns: ColumnDef<ExamCourse>[] = [
  {
    header: "Course Name",
    accessorKey: "courseName",
    size: 40,
    cell: (info) => (
      <OverflowTooltip value={String(info.getValue())} />
    ),
  },
  {
    header: "Enrolled",
    accessorKey: "enrolled",
    size: 10,
    cell: (info) => (
      <OverflowTooltip value={String(info.getValue())} />
    ),
  },
  {
    header: "Evaluated",
    accessorKey: "evaluated",
    size: 10,
    cell: (info) => (
      <OverflowTooltip value={String(info.getValue())} />
    ),
  },
  {
    header: "Instructor",
    accessorKey: "instructor",
    size: 20,
    cell: (info) => (
      <OverflowTooltip value={String(info.getValue())} />
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    size: 15,
    cell: (info) => {
      const status = String(info.getValue());

      const className =
        status === "Completed"
          ? "status status-completed"
          : "status status-progress";

      return <span className={className}>{status}</span>;
    },
  },
];