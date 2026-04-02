import { academicsFacultyData } from "../data/dummydata/academics.data";
import { Strings } from "../../../utils/Strings";

const AcademicsFaculty = () => {
  return (
    <>
      <h3 className="academics-section-title">
        {Strings.ACADEMICS.FACULTY.TITLE}
      </h3>

      <div className="academics-faculty-grid">
        {academicsFacultyData.map((faculty) => (
          <div className="academics-faculty-card" key={faculty.id}>
            <div className="academics-faculty-header">
              <div className="academics-faculty-icon">
                <img src={faculty.icon} alt="" />
              </div>

              <span className="academics-course-count">
                {faculty.courses} {Strings.ACADEMICS.FACULTY.COURSES}
              </span>
            </div>

            <div className="academics-faculty-body">
              <div className="academics-faculty-text">
                <h4>{faculty.name}</h4>
                <p>
                  {Strings.ACADEMICS.FACULTY.HEAD} {faculty.head}
                </p>
              </div>

              <div className="academics-faculty-progress">
                <div className="academics-progress-label">
                  {Strings.ACADEMICS.FACULTY.SEATS_OCCUPIED}
                </div>

                <div className="academics-progress-wrapper">
                  <div className="academics-progress-bar">
                    <div
                      className="academics-progress-green"
                      style={{ width: `${faculty.occupied}%` }}
                    />
                    <div
                      className="academics-progress-red"
                      style={{ width: `${100 - faculty.occupied}%` }}
                    />
                  </div>

                  <span className="academics-progress-percent">
                    {faculty.occupied}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AcademicsFaculty;