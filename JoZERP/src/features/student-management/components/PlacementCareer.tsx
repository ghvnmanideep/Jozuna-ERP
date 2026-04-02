import React from 'react';
import { Briefcase, Activity, Layers, Hexagon, Building } from 'lucide-react';
import { PlacementItem } from '../interfaces/PlacementItem';
const placementItems: PlacementItem[] = [
  {
    id: '1',
    company: 'Global Solutions',
    status: 'Waitlisted',
    logoColor: '#6366f1',
    LogoIcon: Briefcase,
  },
  {
    id: '2',
    company: 'NextGen Labs',
    status: 'Under Review',
    logoColor: '#f97316',
    LogoIcon: Activity,
  },
  {
    id: '3',
    company: 'Nexovate Technologies',
    status: 'Under Review',
    logoColor: '#06b6d4',
    LogoIcon: Layers,
  },
  {
    id: '4',
    company: 'MindForge Creative Ads',
    status: 'Under Review',
    logoColor: '#f43f5e',
    LogoIcon: Hexagon,
  },
  {
    id: '5',
    company: 'Vertexa Technologies',
    status: 'Under Review',
    logoColor: '#10b981',
    LogoIcon: Building,
  },
  {
    id: '6',
    company: 'Innovate Hub',
    status: 'Under Review',
    logoColor: '#8b5cf6',
    LogoIcon: Activity,
  },
  {
    id: '7',
    company: 'CloudStream Systems',
    status: 'Under Review',
    logoColor: '#3b82f6',
    LogoIcon: Layers,
  },
  {
    id: '8',
    company: 'DataWave Inc',
    status: 'Waitlisted',
    logoColor: '#f59e0b',
    LogoIcon: Hexagon,
  },
];

const PlacementCareer: React.FC = () => {
  return (
    <div className="activities-section placement-section">
      <h3 className="section-title">Placement & Career</h3>
      <div className="placement-list">
        {placementItems.map((item) => (
          <div key={item.id} className="placement-item">
            <div className="company-info">
              <div className="company-logo" style={{ color: item.logoColor }}>
                <item.LogoIcon size={24} />
              </div>
              <p className="company-name">{item.company}</p>
            </div>
            <div className={`status-badge ${item.status === 'Waitlisted' ? 'badge-waitlisted' : 'badge-review'}`}>
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementCareer;
