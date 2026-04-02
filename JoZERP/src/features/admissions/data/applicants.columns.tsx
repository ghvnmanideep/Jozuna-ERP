import { ColumnDef } from "@tanstack/react-table";
import { Applicant } from "./applicants.data";

/* ✅ IMPORT IMAGES */
import approvedAction from "../assets/approved action.png";
import rejectedAction from "../assets/rejected action.png";
import waitListedAction from "../assets/wait listed action.png";

/* ✅ STATUS CLASS (REPLACE OLD ONE WITH THIS) */
const getStatusClass = (status: string) => {
  const normalized = status.trim().toLowerCase();

  switch (normalized) {
    case "approved":
      return "status approved";

    case "rejected":
      return "status rejected";

    case "wait listed":
    case "waitlisted":
      return "status wait";

    case "ready to join":
      return "status ready";

    case "declined":
      return "status declined";

    case "no response":
      return "status noresponse";

    case "enrolled":
      return "status enrolled";

    default:
      return "status";
  }
};

/* ✅ COLUMNS */
export const applicantsColumns: ColumnDef<Applicant>[] = [
  {
    header: "Applicant No.",
    accessorKey: "applicantNo",
    size: 15,
  },

  {
    header: "Applicant Name",
    accessorKey: "name",
    size: 30,
  },

  {
    header: "PCM Cutoff",
    accessorKey: "cutoff",
    size: 15,
    cell: ({ getValue }) => (
      <span className="cutoff">{getValue() as string}</span>
    ),
  },

  {
    header: "AI Match Score",
    accessorKey: "match",
    size: 15,
  },

  {
    header: "Community",
    accessorKey: "community",
    size: 15,
  },

  /* ✅ ACTION / STATUS COLUMN */
  {
    header: "Action / Status",
    accessorKey: "status",
    size: 20,
    cell: ({ row, getValue }) => {
      const status = getValue() as string;

      /* ✅ USE ID (BEST PRACTICE) */
      const id = row.original.applicantNo;

      /* ✅ SHOW 3 ICONS ONLY FOR THESE ROWS */
      if (
        id === "JZ26_UG_0049" || // Alex Rivera
        id === "JZ26_UG_0224"    // Arjun Rajesh
      ) {
        return (
          <div className="action-box-group">
            <div className="action-box approve">
              <img src={approvedAction} alt="approve" />
            </div>

            <div className="action-box reject">
              <img src={rejectedAction} alt="reject" />
            </div>

            <div className="action-box wait">
              <img src={waitListedAction} alt="wait" />
            </div>
          </div>
        );
      }

      /* ✅ NORMAL STATUS */
      return (
        <span className={getStatusClass(status)}>
          {status}
        </span>
      );
    },
  },
];