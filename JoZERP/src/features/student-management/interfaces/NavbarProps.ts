import { Campus } from './Campus';
import { FinanceType } from './FinanceType';
import { AcademicYear } from './AcademicYear';

export interface NavbarProps {
  campus: Campus;
  setCampus: (value: Campus) => void;
  finance: FinanceType;
  setFinance: (value: FinanceType) => void;
  academicYear: AcademicYear;
  setAcademicYear: (value: AcademicYear) => void;
}