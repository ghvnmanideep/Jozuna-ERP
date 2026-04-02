import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

/* ============================================================
   CUSTOM TOOLTIP (GLOBAL STYLING)
============================================================ */

const CustomTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "grey",
    color: "white",
    fontSize: "12px",
    padding: "10px 10px",
    borderRadius: "6px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    maxWidth: "100%"
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#ffffff",
  },
}));

export default CustomTooltip;