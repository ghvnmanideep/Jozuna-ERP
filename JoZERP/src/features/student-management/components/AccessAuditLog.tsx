import React from 'react';
import { FileText, BarChart2, AlertTriangle } from 'lucide-react';
import '../styles/AccessAuditLog.css';
import { AuditEvent } from '../interfaces/AuditEvent';

const auditEvents: AuditEvent[] = [
  {
    id: '1',
    type: 'payment',
    title: 'Fees Paid (Sem VII)',
    date: '14 Jan 2026',
    meta: 'Receipt #10294',
    icon: <FileText size={20} />,
    iconBg: '#eef2ff',
    iconColor: '#6366f1',
  },
  {
    id: '2',
    type: 'result',
    title: 'Result Published (Sem VI)',
    date: '20 Dec 2025',
    meta: 'GPA: 3.90',
    icon: <BarChart2 size={20} />,
    iconBg: '#ecfdf5',
    iconColor: '#10b981',
  },
  {
    id: '3',
    type: 'warning',
    title: 'Hostel Late Entry Warning',
    date: '05 Nov 2025',
    meta: 'Issued by Block C Warden',
    icon: <AlertTriangle size={20} />,
    iconBg: '#fff7ed',
    iconColor: '#f97316',
  },
];

const AccessAuditLog: React.FC = () => {
  return (
    <div className="access-audit-log">
      <h3 className="section-title">Administrative History</h3>
      <div className="audit-list">
        {auditEvents.map((event) => (
          <div key={event.id} className="audit-item">
            <div 
              className="audit-icon" 
              style={{ backgroundColor: event.iconBg, color: event.iconColor }}
            >
              {event.icon}
            </div>
            <div className="audit-details">
              <h4 className="audit-title">{event.title}</h4>
              <p className="audit-meta">
                {event.date} • {event.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessAuditLog;
