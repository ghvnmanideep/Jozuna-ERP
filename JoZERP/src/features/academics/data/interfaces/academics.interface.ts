export interface AcademicsSummary {
  id: number;
  title: string;
  value: string;
  subValue?: string;
  icon: string;
}

export interface AcademicsFaculty {
  id: number;
  name: string;
  head: string;
  courses: number;
  occupied: number;
  icon: string;
}
export interface AcademicCourse {
  courseName: string;
  eligibility: string;
  department: string;
  category: string;
  duration: string;
  intake: string;
  status: "Open" | "Full";
}