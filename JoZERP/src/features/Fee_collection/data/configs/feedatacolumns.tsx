import { ColumnDef } from "@tanstack/react-table";
import { FeeData } from "../interfaces/feedatainterface";
import OverflowTooltip from "../../../../common/component/tooltips/OverflowTooltip";

export const FeeColumns: ColumnDef<FeeData>[] = [
  { 
    header: "Receipt No.", 
    accessorKey: "receiptNo",
    size: 15,
    cell: ({ getValue }) => <OverflowTooltip value={getValue<string>()} />
  },
  { 
    header: "Fee Head", 
    accessorKey: "feeHead",
    size: 20,
    cell: ({ getValue }) => <OverflowTooltip value={getValue<string>()} />
  },
  {
    header: "Total Dues",
    accessorKey: "totalDues",
    size: 12,
    cell: ({ getValue }) => `₹${getValue<number>().toLocaleString("en-IN")}`,
  },
  {
    header: "Paid",
    accessorKey: "paid",
    size: 12,
    cell: ({ getValue }) => (
      <span className="paid-status green">
        ₹{getValue<number>().toLocaleString("en-IN")}
      </span>
    ),
  },
  {
    header: "Balance",
    accessorKey: "balance",
    size: 12,
    cell: ({ getValue }) => (
      <span className="paid-status red">
        ₹{getValue<number>().toLocaleString("en-IN")}
      </span>
    ),
  },
  { 
    header: "Paid at", 
    accessorKey: "paidAt",
    size: 15,
    cell: ({ getValue }) => <OverflowTooltip value={getValue<string>()} />
  },
  { 
    header: "Payment Mode", 
    accessorKey: "paymentMode",
    size: 15,
    cell: ({ getValue }) => <OverflowTooltip value={getValue<string>()} />
  },

];