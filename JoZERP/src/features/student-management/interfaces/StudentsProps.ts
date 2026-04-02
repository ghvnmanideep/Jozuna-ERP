import { Student } from './Student';

export interface StudentsProps {
  students: Student[];
  selectedStudent: Student;
  setSelectedStudent: (student: Student) => void;
}