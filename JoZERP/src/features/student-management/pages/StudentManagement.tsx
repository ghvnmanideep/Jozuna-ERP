import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Students from '../components/Students';
import StudentProfile from '../components/StudentProfile';
import StudentTabs from '../components/StudentTabs';
import { Student } from '../interfaces/Student';
import { TimelineEvent } from '../interfaces/TimelineEvent';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/data/redux';
import DocumentVault from '../components/DocumentVault';
import AccessAuditLog from '../components/AccessAuditLog';
import Activities from '../components/Activities';
import { Campus } from '../interfaces/Campus';
import { FinanceType } from '../interfaces/FinanceType';
import { AcademicYear } from '../interfaces/AcademicYear';
import '../styles/StudentManagement.css';
import { Strings } from '../../../utils/Strings';



const students: Student[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    initials: 'AR',
    color: '#6366f1',
    studentId: 'STU-2026-0042',
    year: 'Senior Year (Sem VII)',
    program: 'B.E. (CS & Artificial Intelligence)',
    credits: 88,
    attendance: 94.2,
    backlogs: 0,
    cgpa: 3.82,
    academicStanding: 'Good',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 0.01 },
      { sem: 'Sem II', cgpa: 3.5 },
      { sem: 'Sem III', cgpa: 3.45 },
      { sem: 'Sem IV', cgpa: 3.6 },
      { sem: 'Sem V', cgpa: 3.7 },
      { sem: 'Sem VI', cgpa: 11.0 },
    ],
  },
  {
    id: '2',
    name: 'Arjun Rajesh',
    initials: 'AR',
    color: '#8b5cf6',
    studentId: 'STU-2026-0043',
    year: 'Senior Year (Sem VII)',
    program: 'B.E. (CS & Artificial Intelligence)',
    credits: 82,
    attendance: 89.5,
    backlogs: 1,
    cgpa: 3.65,
    academicStanding: 'Good',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.2 },
      { sem: 'Sem II', cgpa: 3.3 },
      { sem: 'Sem III', cgpa: 3.4 },
      { sem: 'Sem IV', cgpa: 3.5 },
      { sem: 'Sem V', cgpa: 3.6 },
      { sem: 'Sem VI', cgpa: 3.65 },
    ],
  },
  {
    id: '3',
    name: 'Karthik Subramanian',
    initials: 'KS',
    color: '#0ea5e9',
    studentId: 'STU-2026-0044',
    year: 'Senior Year (Sem VII)',
    program: 'B.Tech (Information Technology)',
    credits: 79,
    attendance: 78.3,
    backlogs: 2,
    cgpa: 3.10,
    academicStanding: 'Satisfactory',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.0 },
      { sem: 'Sem II', cgpa: 3.1 },
      { sem: 'Sem III', cgpa: 3.0 },
      { sem: 'Sem IV', cgpa: 3.2 },
      { sem: 'Sem V', cgpa: 3.1 },
      { sem: 'Sem VI', cgpa: 3.1 },
      { sem: 'Sem VII', cgpa: 3.1 },
      { sem: 'Sem VIII', cgpa: 3.1 },
      { sem: 'Sem IX', cgpa: 3.1 },
    ],
  },
  {
    id: '4',
    name: 'Suresh Kumar',
    initials: 'SK',
    color: '#f59e0b',
    studentId: 'STU-2026-0045',
    year: 'Junior Year (Sem V)',
    program: 'B.E. (Mechanical Engineering)',
    credits: 70,
    attendance: 91.0,
    backlogs: 0,
    cgpa: 3.55,
    academicStanding: 'Good',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.3 },
      { sem: 'Sem II', cgpa: 3.4 },
      { sem: 'Sem III', cgpa: 3.5 },
      { sem: 'Sem IV', cgpa: 3.5 },
      
    ],
  },
  {
    id: '5',
    name: 'Vigneshwaran Murugan',
    initials: 'VM',
    color: '#10b981',
    studentId: 'STU-2026-0046',
    year: 'Senior Year (Sem VII)',
    program: 'B.E. (Electronics & Communication)',
    credits: 84,
    attendance: 85.7,
    backlogs: 0,
    cgpa: 3.72,
    academicStanding: 'Good',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.5 },
      { sem: 'Sem II', cgpa: 3.6 },
      { sem: 'Sem III', cgpa: 3.65 },
      { sem: 'Sem IV', cgpa: 3.7 },
      { sem: 'Sem V', cgpa: 3.72 },
      { sem: 'Sem VI', cgpa: 3.72 },
    ],
  },
  {
    id: '6',
    name: 'Pradeep Narayanan',
    initials: 'PN',
    color: '#ef4444',
    studentId: 'STU-2026-0047',
    year: 'Sophomore Year (Sem III)',
    program: 'B.Tech (Computer Science)',
    credits: 42,
    attendance: 72.0,
    backlogs: 3,
    cgpa: 2.85,
    academicStanding: 'Warning',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.0 },
      { sem: 'Sem II', cgpa: 2.9 },
      { sem: 'Sem III', cgpa: 2.85 },
      { sem: 'Sem IV', cgpa: 2.85 },
      { sem: 'Sem V', cgpa: 2.85 },
      { sem: 'Sem VI', cgpa: 2.85 },
    ],
  },
  {
    id: '7',
    name: 'Balaji Krishnamurthy',
    initials: 'BK',
    color: '#06b6d4',
    studentId: 'STU-2026-0048',
    year: 'Senior Year (Sem VII)',
    program: 'B.E. (Civil Engineering)',
    credits: 88,
    attendance: 92.5,
    backlogs: 0,
    cgpa: 3.90,
    academicStanding: 'Excellent',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.7 },
      { sem: 'Sem II', cgpa: 3.75 },
      { sem: 'Sem III', cgpa: 3.8 },
      { sem: 'Sem IV', cgpa: 3.85 },
      { sem: 'Sem V', cgpa: 3.88 },
      { sem: 'Sem VI', cgpa: 3.9 },
    ],
  },
  {
    id: '8',
    name: 'Manoj Srinivasan',
    initials: 'MS',
    color: '#d946ef',
    studentId: 'STU-2026-0049',
    year: 'Junior Year (Sem V)',
    program: 'B.E. (CS & Artificial Intelligence)',
    credits: 62,
    attendance: 88.0,
    backlogs: 1,
    cgpa: 3.40,
    academicStanding: 'Good',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.2 },
      { sem: 'Sem II', cgpa: 3.3 },
      { sem: 'Sem III', cgpa: 3.35 },
      { sem: 'Sem IV', cgpa: 3.38 },
      { sem: 'Sem V', cgpa: 3.4 },
      { sem: 'Sem VI', cgpa: 3.4 },
    ],
  },
  {
    id: '9',
    name: 'Senthil Kumar Perumal',
    initials: 'SK',
    color: '#84cc16',
    studentId: 'STU-2026-0050',
    year: 'Freshman Year (Sem I)',
    program: 'B.E. (Mechanical Engineering)',
    credits: 18,
    attendance: 95.0,
    backlogs: 0,
    cgpa: 3.78,
    academicStanding: 'Good',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.78 },
      { sem: 'Sem II', cgpa: 3.78 },
      { sem: 'Sem III', cgpa: 3.78 },
      { sem: 'Sem IV', cgpa: 3.78 },
      { sem: 'Sem V', cgpa: 3.78 },
      { sem: 'Sem VI', cgpa: 3.78 },
    ],
  },
  {
    id: '10',
    name: 'Priyanka Sharma',
    initials: 'PS',
    color: '#fb7185',
    studentId: 'STU-2026-0051',
    year: 'Junior Year (Sem V)',
    program: 'B.Tech (Computer Science)',
    credits: 65,
    attendance: 96.5,
    backlogs: 0,
    cgpa: 3.92,
    academicStanding: 'Excellent',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.85 },
      { sem: 'Sem II', cgpa: 3.88 },
      { sem: 'Sem III', cgpa: 3.90 },
      { sem: 'Sem IV', cgpa: 3.92 },
    ],
  },
  {
    id: '11',
    name: 'Rahul Verma',
    initials: 'RV',
    color: '#0ea5e9',
    studentId: 'STU-2026-0052',
    year: 'Sophomore Year (Sem III)',
    program: 'B.E. (Mechanical Engineering)',
    credits: 38,
    attendance: 82.0,
    backlogs: 1,
    cgpa: 3.15,
    academicStanding: 'Satisfactory',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.0 },
      { sem: 'Sem II', cgpa: 3.15 },
    ],
  },
  {
    id: '12',
    name: 'Anjali Gupta',
    initials: 'AG',
    color: '#8b5cf6',
    studentId: 'STU-2026-0053',
    year: 'Senior Year (Sem VII)',
    program: 'B.E. (Electronics & Communication)',
    credits: 90,
    attendance: 93.8,
    backlogs: 0,
    cgpa: 3.75,
    academicStanding: 'Good',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.6 },
      { sem: 'Sem II', cgpa: 3.65 },
      { sem: 'Sem III', cgpa: 3.7 },
      { sem: 'Sem IV', cgpa: 3.72 },
      { sem: 'Sem V', cgpa: 3.75 },
      { sem: 'Sem VI', cgpa: 3.75 },
    ],
  },
  {
    id: '13',
    name: 'Deepak Raj',
    initials: 'DR',
    color: '#10b981',
    studentId: 'STU-2026-0054',
    year: 'Freshman Year (Sem I)',
    program: 'B.Tech (Information Technology)',
    credits: 12,
    attendance: 98.0,
    backlogs: 0,
    cgpa: 3.80,
    academicStanding: 'Excellent',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.8 },
    ],
  },
  {
    id: '14',
    name: 'Sneha Rao',
    initials: 'SR',
    color: '#f43f5e',
    studentId: 'STU-2026-0055',
    year: 'Junior Year (Sem V)',
    program: 'B.E. (CS & Artificial Intelligence)',
    credits: 58,
    attendance: 85.2,
    backlogs: 2,
    cgpa: 2.95,
    academicStanding: 'Warning',
    status: 'Active',
    semesterData: [
      { sem: 'Sem I', cgpa: 3.2 },
      { sem: 'Sem II', cgpa: 3.1 },
      { sem: 'Sem III', cgpa: 3.0 },
      { sem: 'Sem IV', cgpa: 2.95 },
    ],
  },
];

const timelineEvents: TimelineEvent[] = [
  {
    type: 'Open',
    title: 'Mid-Semester Exams',
    description:
      'Evaluation covering Modules 1-3. Venue: Block C, Hall 4. Ensure admit card is downloaded.',
    date: 'Oct 12 - 18',
  },
  {
    type: 'Submission',
    title: 'Major Project Proposal',
    description:
      'Submission of Abstract and Tech-Stack for the Final Year Capstone Project (AI/ML Domain).',
    date: 'Nov 05',
  },
  {
    type: 'Internal',
    title: 'Lab External Vivas',
    description:
      'Evaluation covering Modules 1-3. Venue: Block C, Hall 4. Ensure admit card is downloaded.',
    date: 'Nov 22',
  },
  {
    type: 'Critical',
    title: 'Exam Fee Payment Deadline',
    description:
      'Last date to pay Semester End Examination fees to avoid late fine and generate Hall Ticket.',
    date: 'Dec 10',
  },
  {
    type: 'Critical',
    title: 'Semester Results - Sem VI',
    description:
      'Results for Semester VI have been published. Students can view their marks on the portal.',
    date: 'Jan 05',
  },
  {
    type: 'Open',
    title: 'Industrial Visit Registration',
    description:
      'Registration for the upcoming industrial visit to the Tech Hub. Limited seats available.',
    date: 'Jan 20',
  },
  {
    type: 'Submission',
    title: 'Internship Report Submission',
    description:
      'Final deadline for submitting the summer internship report verified by company mentor.',
    date: 'Feb 15',
  },
  {
    type: 'Internal',
    title: 'Career Counseling Session',
    description:
      'Mandatory session for final year students regarding placement strategies and mock interviews.',
    date: 'Mar 02',
  },
  {
    type: 'Open',
    title: 'Cultural Fest Volunteers',
    description:
      'Applications open for student volunteers for the annual cultural extravaganza "Spectrum 2026".',
    date: 'Mar 10',
  },
];

const tabs = [
  Strings.STUDENT_MANAGEMENT.TABS.PROFILE,
  Strings.STUDENT_MANAGEMENT.TABS.ACTIVITIES,
  Strings.STUDENT_MANAGEMENT.TABS.AUDIT_LOG,
  Strings.STUDENT_MANAGEMENT.TABS.DOC_VAULT
];

// Initial filters removed as Redux handles the state.

const StudentManagement: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student>(students[0]);
  const [activeTab, setActiveTab] = useState<string>(Strings.STUDENT_MANAGEMENT.TABS.PROFILE);
  const [campus, setCampus] = useState<Campus>('Campus');
  const [finance, setFinance] = useState<FinanceType>('Merit');
  const [academicYear, setAcademicYear] = useState<AcademicYear>('AY 2025-2026');

  // Advanced Filter State from Redux
  const appliedFilters = useSelector((state: RootState) => state.filters);  // Filtering Logic
  const filteredStudents = students.filter((student) => {
    // Example logic mapping for new filters (placeholder since mock data doesn't have these fields explicitly)
    if (appliedFilters.programLevel && !student.year.includes(appliedFilters.programLevel)) {
        // Mock check: Senior/Junior maps to Undergraduate for now
        if (appliedFilters.programLevel === 'Undergraduate' && !student.year.includes('Year')) return false;
    }
    if (appliedFilters.degree && !student.program.includes(appliedFilters.degree)) return false;
    if (appliedFilters.courses.length > 0 && !appliedFilters.courses.some((c: string) => student.program.includes(c))) return false;

    return true;
  });

  // Filter application is handled via Redux straight from the AdvancedFilter component.

  return (
    <div className="sm-page">
      {/* Page Header */}
      <Navbar
        campus={campus}
        setCampus={setCampus}
        finance={finance}
        setFinance={setFinance}
        academicYear={academicYear}
        setAcademicYear={setAcademicYear}
      />

      {/* Body */}
      <div className="sm-body">
        {/* Left Sidebar */}
        <Students
          students={filteredStudents}
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
        />

        {/* Main Section (Tabs + Card) */}
        <div className="sm-main-section">
          {/* Tabs as a separate card */}
          <div className="sm-tab-card">
            <StudentTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          </div>

          {/* Main Content Card */}
          <div className="sm-main-panel">
            {/* Profile Content */}
            {activeTab === Strings.STUDENT_MANAGEMENT.TABS.PROFILE && (
              <StudentProfile selectedStudent={selectedStudent} timelineEvents={timelineEvents} />
            )}

            {/* Document Vault Content */}
            {activeTab === Strings.STUDENT_MANAGEMENT.TABS.DOC_VAULT && (
              <DocumentVault />
            )}

            {/* Access Audit Log Content */}
            {activeTab === Strings.STUDENT_MANAGEMENT.TABS.AUDIT_LOG && (
              <AccessAuditLog />
            )}

            {/* Activities Content */}
            {activeTab === Strings.STUDENT_MANAGEMENT.TABS.ACTIVITIES && (
              <Activities />
            )}

            {/* Other Tabs Placeholder */}
            {activeTab !== Strings.STUDENT_MANAGEMENT.TABS.PROFILE && 
             activeTab !== Strings.STUDENT_MANAGEMENT.TABS.DOC_VAULT && 
             activeTab !== Strings.STUDENT_MANAGEMENT.TABS.AUDIT_LOG && 
             activeTab !== Strings.STUDENT_MANAGEMENT.TABS.ACTIVITIES && (
              <div className="sm-tab-placeholder">
                <p>{activeTab} content coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudentManagement;
