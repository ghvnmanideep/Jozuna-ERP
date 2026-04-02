import { ExamManagementData } from "../interfaces/examManagement.interface"; 

export const examManagementData: ExamManagementData = {
  header: {
    academicYear: "AY 2026–2027"
  },

  summaryCards: {
    avgGpa: 3.42,
    gradingProgress: "82%",
    reevalRequests: 24,
    failedBacklogs: 18
  },

  distribution: {
    distinctionStudents: 144,
    averageStudents: 88
  },

  courseTableData: []
};

export const gradeData = [
  { label: "A+", value: 30 },
  { label: "A", value: 40 },
  { label: "B+", value: 60 },
  { label: "B", value: 75 },
  { label: "C", value: 100 },
  { label: "D", value: 45 },
  { label: "F", value: 20}
];

export const gradeColors = [
  "#19A974",
  "#3CCB97",
  "#F2C766",
  "#F5B61A",
  "#E89A2F",
  "#E28413",
  "#E53935"
];