export interface HeaderData {
  academicYear: string;
}

export interface SummaryCardsData {
  avgGpa: number;
  gradingProgress: string;
  reevalRequests: number;
  failedBacklogs: number;
}

export interface DistributionData {
  distinctionStudents: number;
  averageStudents: number;
}

export interface ExamManagementData {
  header: HeaderData;
  summaryCards: SummaryCardsData;
  distribution: DistributionData;
  courseTableData: any[];
}