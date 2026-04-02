import { PlacementCard } from "../interfaces/placement.interface";

import successRateIcon from "../../assets/success-rate-icon.png";
import highestPackageIcon from "../../assets/highest-package-icon.png";
import averagePackageIcon from "../../assets/average-package-icon.png";
import activeOffersIcon from "../../assets/active-offers-icon.png";
import trainingSessionIcon from "../../assets/training-session-icon.png";
export const placementCards: PlacementCard[] = [

  /* ===== SUMMARY CARDS ===== */
  {
    id: 1,
    titleKey: "SUCCESS_RATE",
    value: "89.4%",
    icon: successRateIcon,
    cardType: "SUMMARY",
  },
  {
    id: 2,
    titleKey: "HIGHEST_PACKAGE",
    value: "₹124,000",
    icon: highestPackageIcon,
    cardType: "SUMMARY",
  },
  {
    id: 3,
    titleKey: "AVERAGE_PACKAGE",
    value: "₹68,500",
    icon: averagePackageIcon,
    cardType: "SUMMARY",
  },
  {
    id: 4,
    titleKey: "ACTIVE_OFFERS",
    value: "56",
    icon: activeOffersIcon,
    cardType: "SUMMARY",
  },

  /* ===== RIGHT SECTION CARDS ===== */
  {
    id: 5,
    titleKey: "PRE_PLACEMENT_TITLE",
    descKey: "PRE_PLACEMENT_DESC",
    icon: trainingSessionIcon,
    cardType: "GREEN",
  },
  {
    id: 6,
    titleKey: "POLICY_TITLE",
    descKey: "POLICY_DESC",
    icon: trainingSessionIcon,
    cardType: "BLUE",
  },
  {
    id: 7,
    titleKey: "TOP_RECRUITERS_TITLE",
    recruiters: ["Google", "Amazon", "Deloitte"],
    icon: trainingSessionIcon,
    cardType: "GREY",
  },
];