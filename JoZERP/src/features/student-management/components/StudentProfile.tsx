import React from 'react';
import Timeline from './Timeline';
import { StudentProfileProps } from '../interfaces/StudentProfileProps';
import { Strings } from '../../../utils/Strings';
import { SemesterLineChart } from '../../../common/component/linechart';
const StudentProfile: React.FC<StudentProfileProps> = ({ selectedStudent, timelineEvents }) => {
  return (
    <div className="sm-profile-content">
      {/* Student Header Card */}
      <div className="sm-profile-header">
        <div className="sm-profile-left">
          <div className="sm-profile-avatar">
            {selectedStudent.initials}
          </div>
          <div className="sm-profile-info">
            <h2 className="sm-profile-name">{selectedStudent.name}</h2>
            <p className="sm-profile-meta">
              {selectedStudent.studentId} &bull; {selectedStudent.year}
            </p>
          </div>
        </div>
        <div className="sm-profile-badges">
          <span className="sm-badge sm-badge--standing">
            {Strings.STUDENT_MANAGEMENT.LABELS.ACADEMIC_STANDING} {selectedStudent.academicStanding}
          </span>
          <span className="sm-badge sm-badge--active">
            <span className="sm-active-dot" />
            {selectedStudent.status}
          </span>
          <span className="sm-badge sm-badge--cgpa">
            <strong>{selectedStudent.cgpa.toFixed(2)} CGPA</strong>
            <span className="sm-cgpa-max"> / 4.0</span>
          </span>
        </div>
      </div>
      <div className="sm-stat-dividers" />



      {/* Side-by-side Chart and Timeline Row */}
      <div className="sm-chart-timeline-row">
        {/* Left: Stats + Chart */}
        <div className="sm-left-content">
          {/* Program info and Progress Bar (Moved inside left content) */}
          <div className="sm-program-section">
            <div className="sm-program-row">
              <span className="sm-program-name">{selectedStudent.program}</span>
              <span className="sm-program-credits">{selectedStudent.credits}% {Strings.STUDENT_MANAGEMENT.LABELS.CREDITS}</span>
            </div>
            <div className="sm-progress-bar">
              <div
                className="sm-progress-fill"
                style={{ width: `${selectedStudent.credits}%` }}
              />
            </div>
          </div>

          <div className="sm-stat-dividers" />

          <div className="sm-attendance-backlogs">
            <div className="sm-stat-item">
              <span className="sm-stat-label">{Strings.STUDENT_MANAGEMENT.LABELS.ATTENDANCE}</span>
              <span className="sm-stat-value sm-stat-value--green">
                {selectedStudent.attendance}%
              </span>
            </div>
            <div className="sm-stat-divider" />
            <div className="sm-stat-item">
              <span className="sm-stat-label">{Strings.STUDENT_MANAGEMENT.LABELS.BACKLOGS}</span>
              <span className={`sm-stat-value ${selectedStudent.backlogs === 0 ? 'sm-stat-value--green' : 'sm-stat-value--dark'}`}>
                {selectedStudent.backlogs}
              </span>
            </div>
          </div>
          
          <div className="sm-graph-container">
            <SemesterLineChart data={selectedStudent.semesterData} />
          </div>
        </div>

        <div className="sm-v-divider" />

        {/* Right: Timeline */}
        <div className="sm-timeline-container">
          <Timeline events={timelineEvents} />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
