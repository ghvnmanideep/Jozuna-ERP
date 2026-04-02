import {
  AcademicsSummary,
  AcademicsFaculty,
} from "../../data/interfaces/academics.interface";
import departmentsIcon from "../../assets/departments-icon.png";
import coursesIcon from "../../assets/courses-icon.png";
import seatsIcon from "../../assets/seats-icon.png";
import patentsIcon from "../../assets/patents-icon.png";
import papersIcon from "../../assets/papers-icon.png";

import engineeringIcon from "../../assets/engineering-icon.png";
import managementIcon from "../../assets/management-icon.png";
import lawIcon from "../../assets/law-icon.png";
import { AcademicCourse } from "../interfaces/academics.interface";
export const academicsSummaryData: AcademicsSummary[] = [
  { id: 1, title: "Total Departments", value: "08", icon: departmentsIcon },
  { id: 2, title: "Active Courses", value: "32", icon: coursesIcon },
  {
    id: 3,
    title: "Total Seats",
    value: "1,850",
    subValue: "142",
    icon: seatsIcon,
  },
  { id: 4, title: "Total Patents", value: "12", icon: patentsIcon },
  { id: 5, title: "Papers Published", value: "142", icon: papersIcon },
];

export const academicsFacultyData: AcademicsFaculty[] = [
  {
    id: 1,
    name: "School of Engineering",
    head: "Dr. Alan Turing",
    courses: 6,
    occupied: 30,
    icon: engineeringIcon,
  },
  {
    id: 2,
    name: "Business Management",
    head: "Prof. Sarah Smith",
    courses: 4,
    occupied: 70,
    icon: managementIcon,
  },
  {
    id: 3,
    name: "Faculty of Law",
    head: "Dr. Harvey Specter",
    courses: 3,
    occupied: 72,
    icon: lawIcon,
  },
];
// ================= DROPDOWN DATA =================

export const campusList: string[] = [
  "Bangalore Central Campus",
  "Knowledge Park Campus",
  "Banyan Court Campus",
  "Sangam Campus",
];

export const financeList: string[] = [
  "Merit",
  "Self-Finance",
];

export const programLevelList: string[] = [
  "Undergraduate",
  "Postgraduate",
  "Doctoral",
];

export const degreeList: string[] = [
  "B.E.",
  "B.Tech",
];

export const courseList: string[] = [
  "Computer Science",
  "Information Technology",
  "Artificial Intelligence",
  "Electronics",
  "Data Science",
];
export const academicData: AcademicCourse[] = [
  {
    courseName: "B.Tech Computer Science",
    eligibility: "Grade 12 (Science)",
    department: "Engineering",
    category: "UG",
    duration: "4 Years",
    intake: "120 / 120",
    status: "Full",
  },
  {
    courseName: "MBA Finance",
    eligibility: "Any Graduation",
    department: "Management",
    category: "PG",
    duration: "2 Years",
    intake: "45 / 80",
    status: "Open",
  },
  {
    courseName: "BCA",
    eligibility: "Grade 12 (Science)",
    department: "Technology",
    category: "UG",
    duration: "3 Years",
    intake: "30 / 60",
    status: "Open",
  },

];