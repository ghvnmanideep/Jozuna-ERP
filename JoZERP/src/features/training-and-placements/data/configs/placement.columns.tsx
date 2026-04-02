import { ColumnDef } from "@tanstack/react-table";
import { PlacementDrive } from "../interfaces/placementTable.interface";
import "../../styles/placementtablestatus.css";
import OverflowTooltip from "../../../../common/component/tooltips/OverflowTooltip";

export const PlacementColumns: ColumnDef<PlacementDrive>[] = [
  {
    header: "Fee Head",
    accessorKey: "company",
    size: 30,
    cell: ({ row, getValue }) => {
    const company = getValue<string>();
    const logo = row.original.logo;

    return (
    <div className="placementcompany-cell">
      <img src={logo} alt="logo" className="placementcompany-logo" />

      <div className="placementcell-left">
        <OverflowTooltip value={company} />
      </div>
    </div>
    );
    },
  },
  {
    header: "Date",
    accessorKey: "date",
    size: 15,
    cell: ({ getValue }) => (
      <div className="placementcell-left">{getValue<string>()}</div>
    ),
  },
  {
    header: "Role / Vacancy",
    accessorKey: "role",
    size: 25,
    cell: ({ getValue }) => {
      const value = getValue<string>();

      const [role, vacancies] = value.split("\n");

      return (
        <div className="placementrole-cell">
          <div className="placementrole-title">{role}</div>
          <div className="placementrole-sub">{vacancies}</div>
        </div>
      );
    },
  },
  {
    header: "Eligibility (GPA)",
    accessorKey: "eligibility",
    size: 15,
    cell: ({ getValue }) => (
      <div className="placementcell-left">{getValue<string>()}</div>
    ),
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

      return (
        <div className="status-cell">
          <span className={className}>{status}</span>
        </div>
      );
    },
  },
];