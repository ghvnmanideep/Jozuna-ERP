export interface PlacementSummaryCard {
  id: number;
  titleKey: "SUCCESS_RATE" | "HIGHEST_PACKAGE" | "AVERAGE_PACKAGE" | "ACTIVE_OFFERS";
  value: string;
  icon: string;
}
export interface PlacementCard {
  id: number;
  titleKey: string;
  value?: string;
  descKey?: string;
  recruiters?: string[];
  icon: string;
  cardType: "SUMMARY" | "GREEN" | "BLUE" | "GREY";
}