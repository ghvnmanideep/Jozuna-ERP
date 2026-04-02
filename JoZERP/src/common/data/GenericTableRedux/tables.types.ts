
export interface TableState<T> {
  currentPage: number;
  cachedPages: Record<number, T[]>;
}

export interface TablesState {
  ExamsDataTable: TableState<any>;
  FeeTable: TableState<any>; 
  FeeCollectionTable: TableState<any>;
  AcademicsDataTable: TableState<any>;
  RecruitmentTable: TableState<any>;
  CourseTable: TableState<any>;
  ApplicantsDataTable: TableState<any>;
}