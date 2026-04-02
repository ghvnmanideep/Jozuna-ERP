import { ColumnDef } from "@tanstack/react-table";
import { PlacementCourse } from "../interfaces/placementCourse.interface";

import "../../styles/placementtablestatus.css";
import OverflowTooltip from "../../../../common/component/tooltips/OverflowTooltip";

export const PlacementCourseColumns: ColumnDef<PlacementCourse>[] = [
  {
    header: "Training",
    accessorKey: "training",
    size: 30,
    cell: ({ getValue }) => (
      <OverflowTooltip value={getValue<string>()} />
    ),
  },
  {
    header: "Date",
    accessorKey: "date",
    size: 15,
  },
  {
    header: "Academy Name",
    accessorKey: "academy",
    size: 25,
    cell: ({ getValue }) => (
      <OverflowTooltip value={getValue<string>()} />
    ),
  },
  {
    header: "Duration",
    accessorKey: "duration",
    size: 15,
  },
  {
    header: "Status",
    accessorKey: "status",
    size: 15,
    cell: ({ getValue }) => {
      const status = getValue<string>();

      const className =
        status === "Confirmed" || status === "Completed"
          ? "status status-completed"
          : "status status-progress";

      return <span className={className}>{status}</span>;
    },
  },
];