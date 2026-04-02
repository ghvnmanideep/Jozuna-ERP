import React from 'react';
import '../styles/Navbar.css';
import { NavbarProps } from '../interfaces/NavbarProps';
import AdvancedFilterNavbar from '../../../common/component/AdvancedFilterModal';
import { Strings } from '../../../utils/Strings';
import { Campus } from '../interfaces/Campus';
import { FinanceType } from '../interfaces/FinanceType';
import { AcademicYear } from '../interfaces/AcademicYear';

const Navbar: React.FC<NavbarProps> = ({
  campus,
  setCampus,
  finance,
  setFinance,
  academicYear,
  setAcademicYear,
}) => {
  return (
    <div className="sm-page-header">
      <h1 className="sm-page-title">{Strings.STUDENT_MANAGEMENT.NAVBAR.TITLE}</h1>
      <div className="sm-filters">
        <div className="sm-select-wrapper">
          <select
            value={campus}
            onChange={(e) => setCampus(e.target.value as Campus)}
            className="sm-select"
          >
            <option value="Campus">Campus</option>
            <option value="Banglore Central Campus">Banglore Central Campus</option>
            <option value="Knowledge Park Campus">Knowledge Park Campus</option>
            <option value="Banyan Court Campus">Banyan Court Campus</option>
            <option value="Sangam Campus">Sangam Campus</option>
          </select>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className="sm-select-icon">
            <path d="M0 0L5 6L10 0H0Z" />
          </svg>
        </div>
        <div className="sm-select-wrapper">
          <select
            value={finance}
            onChange={(e) => setFinance(e.target.value as FinanceType)}
            className="sm-select"
          >
            <option value="Merit">Merit</option>
            <option value="Self-Finance">Self-Finance</option>
          </select>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className="sm-select-icon">
            <path d="M0 0L5 6L10 0H0Z" />
          </svg>
        </div>
        <div className="sm-select-wrapper">
          <select
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value as AcademicYear)}
            className="sm-select"
          >
            <option>AY 2025-2026</option>
            <option>AY 2024-2025</option>
            <option>AY 2023-2024</option>
          </select>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className="sm-select-icon">
            <path d="M0 0L5 6L10 0H0Z" />
          </svg>
        </div>
        <AdvancedFilterNavbar />
      </div>
    </div>
  );
};

export default Navbar;
