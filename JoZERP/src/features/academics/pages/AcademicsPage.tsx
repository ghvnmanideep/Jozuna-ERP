import "../styles/Academics.css";
import AcademicsHeader from "../components/AcademicsHeader";
import AcademicsSummary from "../components/AcademicsSummary";
import AcademicsFaculty from "../components/AcademicsFaculty";
import AcademicTable from "../components/AcademicTable";

const AcademicsPage = () => {
  return (
    <div className="academics-wrapper">
      <AcademicsHeader />
      <AcademicsSummary />
      <AcademicsFaculty />
      <AcademicTable/>
      
    </div>
  );
};

export default AcademicsPage;
