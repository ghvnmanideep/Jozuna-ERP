export interface ChartData {
  label: string;
  value: number;
  compareValue?: number;
  revenue?: string;
  month?: string;
  students?: number;
}

export interface TooltipField {
  label: string;
  key: keyof ChartData;
  color?: string;
}

export interface RechartProps {
  data: ChartData[];
  colors?: string[];
  visibleCount?: number;
  showTooltip?: boolean;

  // height?: number;
  height?: number | `${number}%`;
  barSize?:number,
  margin?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
  barCategoryGap?: string | number;
  barGap?: number;
  

  showCompareBar?: boolean;   
  showTooltipDetails?: boolean; 

  activeBarColor?: string;
  defaultBarColor?: string;
  tooltipConfig?: TooltipField[];
  
}

export const gradeData = [
  { label: "A+", value: 10  },
  { label: "A", value: 10,  },
  { label: "B+", value: 15,  },
  { label: "B", value: 20,  },
  { label: "C", value: 25,  },
  { label: "D", value: 20, },
  { label: "F", value: 5, },
  { label: "G", value: 10 }
  // { label: "H", value: 65 },
];

export const gradeColors = [
  "#16A34A",
  "#22C55E",
  "#FACC15",
  "#F59E0B",
  "#F97316",
  "#DC2626",
  "#991B1B",
  "#991B1B"
];

export const DashboardData = [
  { label: "B.sccomputer",value: 30, compareValue: 50, revenue: "₹2.1M",  month: "June 2026", students: 1000 },
  { label: "MCA",         value: 60, compareValue: 40, revenue: "₹3.2M",  month: "June 2026", students: 1400 },
  { label: "MBA (HR)",    value: 40, compareValue: 30,revenue: "₹2.9M",  month: "June 2026", students: 1200 },
  { label: "B.E (Civil)", value: 50, compareValue: 70,revenue: "₹4.82M", month: "June 2026", students: 2245 },
  { label: "M.E (Civil)", value: 70, compareValue: 60,revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  { label: "M.E (Civil)", value: 70, compareValue: 45,revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  { label: "M.E (Civil)", value: 70, compareValue: 45,revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  { label: "M.E (Civil)", value: 70, compareValue: 45,revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  { label: "M.E (Civil)", value: 70, compareValue: 45,revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  
  
];

export const FeeData = [
  { label: "B.sccomputer",value: 30, revenue: "₹2.1M",  month: "June 2026", students: 1000 },
  { label: "MCA",         value: 60,  revenue: "₹3.2M",  month: "June 2026", students: 1400 },
  { label: "MBA (HR)",    value: 40,revenue: "₹2.9M",  month: "June 2026", students: 1200 },
  { label: "B.E (Civil)", value: 50, revenue: "₹4.82M", month: "June 2026", students: 2245 },
  { label: "M.E (Civil)", value: 70, revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  { label: "M.E (Civil)", value: 70, revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  { label: "M.E (Civil)", value: 70, revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  { label: "M.E (Civil)", value: 70, revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  { label: "M.E (Civil)", value: 70, revenue: "₹3.1M",  month: "June 2026", students: 1500 },
  
  
];

export const Admissiondata = [
  { label: "BCA",value: 30, revenue: "₹2.1M",  month: "June 2026", students: 1000 },
  { label: "MCA",value: 60,  revenue: "₹3.2M",  month: "June 2026", students: 1400 },
  { label: "MBA (HR)",    value: 40,revenue: "₹2.9M",  month: "June 2026", students: 1200 },
  { label: "B.E (Civil)", value: 50, revenue: "₹4.82M", month: "June 2026", students: 2245 },
  { label: "M.E (Civil)", value: 70, revenue: "₹3.1M",  month: "June 2026", students: 1500 },
]