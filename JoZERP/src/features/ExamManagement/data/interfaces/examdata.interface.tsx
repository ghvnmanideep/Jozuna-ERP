export interface ExamCourse {
  courseName: string;
  enrolled: number;
  evaluated: number;
  instructor: string;
  status: "Completed" | "In Progress";
}