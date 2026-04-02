export interface Student {
  id: string;
  name: string;
  initials: string;
  color: string;
  studentId: string;
  year: string;
  program: string;
  credits: number;
  attendance: number;
  backlogs: number;
  cgpa: number;
  academicStanding: string;
  status: 'Active' | 'Inactive';
  semesterData: { sem: string; cgpa: number }[];
}



