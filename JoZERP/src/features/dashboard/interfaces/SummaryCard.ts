import { LucideIcon } from "lucide-react";
export interface SummaryCard {
  title: string;
  value: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  isRevenue?: boolean;
}