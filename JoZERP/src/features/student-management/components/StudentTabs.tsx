import React from 'react';
import { StudentTabsProps } from '../interfaces/StudentTabsProps';
const StudentTabs: React.FC<StudentTabsProps> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="sm-tabs">
      {tabs.map((tab) => (
        <button key={tab}
          className={`sm-tab ${activeTab === tab ? 'sm-tab--active' : ''}`}
          onClick={() => setActiveTab(tab)}>{tab}</button>
      ))}
    </div>
  );
};

export default StudentTabs;