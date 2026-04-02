import React from 'react';
import { StudentsProps } from '../interfaces/StudentsProps';
import '../styles/Students.css';
const Students: React.FC<StudentsProps> = ({
  students,
  selectedStudent,
  setSelectedStudent,
}) => {
  return (
    <div className="sm-left-panel">
      <p className="sm-panel-label">Administrative History</p>
      <div className="sm-student-list">
        {students.map((student) => (
          <div
            key={student.id}
            className={`sm-student-item ${selectedStudent.id === student.id ? 'sm-student-item--active' : ''}`}
            onClick={() => setSelectedStudent(student)}
          >
            <div
              className="sm-student-avatar"
            >
              {student.initials}
            </div>
            <span className="sm-student-name">{student.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
