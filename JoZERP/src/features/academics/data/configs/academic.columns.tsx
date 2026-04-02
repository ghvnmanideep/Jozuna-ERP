import { ColumnDef } from "@tanstack/react-table";
import { AcademicCourse } from "../interfaces/academics.interface";
import OverflowTooltip from "../../../../common/component/tooltips/OverflowTooltip";


export const AcademicColumns: ColumnDef<AcademicCourse>[] = [
  {
    header: "Course Name",
    accessorKey: "courseName",
    size: 25,
    cell: ({ getValue }) => (
        <div className="course-name">
      <OverflowTooltip value={getValue<string>()} /></div>
    ),
  },
  {
    header: "Eligibility",
    accessorKey: "eligibility",
    size: 20,
  },
  {
    header: "Department",
    accessorKey: "department",
    size: 15,
  },
  {
    header: "Category",
    accessorKey: "category",
    size: 10,
  },
  {
    header: "Duration",
    accessorKey: "duration",
    size: 10,
  },
  {
    header: "Intake",
    accessorKey: "intake",
    size: 10,
    cell: ({ getValue }) => (
        <div className="intake-value">
      <OverflowTooltip value={getValue<string>()} />
        </div>
        ),
  },
  {
    header: "Status",
    accessorKey: "status",
    size: 10,
    cell: ({ getValue }) => {
      const status = getValue<string>();

      const className =
        status === "Open"
          ? "status status-completed"
          : "status status-progress";

      return <span className={className}>{status}</span>;
    },
  },
];