// export{}
import { ColumnDef } from "@tanstack/react-table";
import { FeeTableData } from "../interface/feeManageTableinterface";
import OverflowTooltip from "../../../../common/component/tooltips/OverflowTooltip";

export const FeeColumns: ColumnDef<FeeTableData>[] = [
  {
    header: "Fee Head",
    accessorKey: "feeHead",
    cell: ({ getValue }) => (
      <OverflowTooltip value={getValue() as string} />
    ),
  },
  {
    header: "Fee Type",
    accessorKey: "feeType",
    cell: ({ getValue }) => (
      <OverflowTooltip value={getValue() as string} />
    ),
  },
  {
    header: "Semester / Year",
    accessorKey: "semesterYear",
    cell: ({ getValue }) => (
      <OverflowTooltip value={getValue() as string} />
    ),
  },
  {
    header: "Amount (₹)",
    accessorKey: "amount",
    cell: ({ getValue }) => `₹ ${getValue() as number}`,
  },
];