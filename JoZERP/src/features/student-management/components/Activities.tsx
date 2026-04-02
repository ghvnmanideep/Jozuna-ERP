import React from 'react';
import '../styles/Activities.css';
import FinancialOverview from './FinancialOverview';
import PlacementCareer from './PlacementCareer';
const Activities: React.FC = () => {
  return (
    <div className="activities-container">
      <div className="activities-grid">
        <FinancialOverview />
        <PlacementCareer />
      </div>
    </div>
  );
};

export default Activities;
