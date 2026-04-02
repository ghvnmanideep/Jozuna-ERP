import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import AdmissionPage from "../../features/admissions/pages/AdmissionPage";

const AcademicsPage = lazy(
  () => import("../../features/academics/pages/AcademicsPage"),
);

const AlumniPage = lazy(
  () => import("../../features/AlumniFootprint/pages/AlumniPage"),
);

const HostelManagementPage = lazy(
  () => import("../../features/HostelManagement/pages/HostelManagementPage"),
);

const FeesCollectionPage = lazy(
  () => import("../../features/Fee_collection/pages/FeeCollectionPage"),
);

/* ADDED THIS */
const MyProfile = lazy(
  () => import("../../features/profile/pages/MyProfile"),
);

const PATHS = {
  DASHBOARD: "dashboard",
  ACADEMICS: "academics",
  ADMISSIONS: "admissions",
  APPLICANTS: "admissions/applicants",
  ALUMNI_FOOTPRINT: "alumni-footprint",
  EXAM_MANAGEMENT: "exam-management",
  FEES_COLLECTION: "fee-collection",
  FEES_MANAGEMENT: "fee_management",
  HOSTEL_MANAGEMENT: "hostel-management",
  STUDENT_MANAGEMENT: "student-management",
  TRAINING_PLACEMENT: "training-placement",
  MY_PROFILE: "my-profile",   // ADDED
} as const;

// Lazy load feature components directly
const Dashboard = lazy(
  () => import("../../features/dashboard/pages/Dashboard"),
);

const AdmissionsPage = lazy(
  () => import("../../features/admissions/pages/AdmissionPage"),
);
const ApplicantsPage = lazy(
  () => import("../../features/admissions/pages/ApplicantsPage")
);
const ExamManagement = lazy(
  () => import("../../features/ExamManagement/pages/ExamManagementPage"),
);

const FeesManagement = lazy(
  () => import("../../features/fee_management/pages/Feemanagement"),
);

const StudentManagement = lazy(
  () => import("../../features/student-management/pages/StudentManagement"),
);

const TrainingPlacement = lazy(
  () => import("../../features/training-and-placements/pages/TrainingAndPlacementsPage"),
);

const DashboardRoute: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
        <Route path={PATHS.ACADEMICS} element={<AcademicsPage />} />
        <Route path={PATHS.ADMISSIONS} element={<AdmissionsPage />} />
        <Route path={PATHS.APPLICANTS} element={<ApplicantsPage />} />
        <Route path={PATHS.ALUMNI_FOOTPRINT} element={<AlumniPage />} />
        <Route path={PATHS.EXAM_MANAGEMENT} element={<ExamManagement />} />
        <Route path={PATHS.FEES_COLLECTION} element={<FeesCollectionPage />} />
        <Route path={PATHS.FEES_MANAGEMENT} element={<FeesManagement />} />
        {/* <Route path="/admission" element={<AdmissionPage />} /> 
        <Route path="/applicants" element={<ApplicantsPage />} /> */}

        <Route
          path={PATHS.HOSTEL_MANAGEMENT}
          element={<HostelManagementPage />}
        />
        <Route
          path={PATHS.STUDENT_MANAGEMENT}
          element={<StudentManagement />}
        />
        <Route
          path={PATHS.TRAINING_PLACEMENT}
          element={<TrainingPlacement />}
        />
        <Route
          path={PATHS.MY_PROFILE} // my profile
          element={<MyProfile />}
        />

      </Routes>
    </Suspense>
  );
};

export default DashboardRoute;