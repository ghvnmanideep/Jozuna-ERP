export interface StudentTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
}