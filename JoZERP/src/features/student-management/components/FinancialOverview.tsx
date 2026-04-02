import React from 'react';
import { FeeItem } from '../interfaces/FeeItem';

const feeItems: FeeItem[] = [
  {
    id: '1',
    title: 'Tuition Fees - Semester 4',
    amount: '₹40,500.00',
    subtext: 'Original Amount ₹5,000 - Paid ₹1,500',
    status: 'Not Paid',
  },
  {
    id: '2',
    title: 'Lab & Technology Fee',
    amount: '₹1,000.00',
    status: 'Not Paid',
  },
  {
    id: '3',
    title: 'Tuition Fees - Semester 3',
    amount: '₹60,000.00',
    subtext: 'Original Amount ₹5,000 - Paid ₹1,500',
    status: 'Paid',
  },
  {
    id: '4',
    title: 'Library Membership',
    amount: '₹1000.00',
    status: 'Paid',
  },
];

const FinancialOverview: React.FC = () => {
  return (
    <div className="activities-section financial-section">
      <h3 className="section-title">Financial Overview</h3>
      <div className="financial-summary">
        <div className="summary-item">
          <p className="summary-label">Total Paid (Lifetime):</p>
          <p className="summary-value paid-val">₹61,000</p>
        </div>
        <div className="summary-divider" />
        <div className="summary-item">
          <p className="summary-label">Outstanding Balance</p>
          <p className="summary-value outstanding-val">₹41,500</p>
        </div>
      </div>

      <div className="fee-list">
        {feeItems.map((item) => (
          <div 
            key={item.id} 
            className={`fee-item ${item.status === 'Paid' ? 'status-paid-row' : ''}`}
          >
            <div className="fee-content">
              <p className="fee-title">{item.title}</p>
              <p className="fee-amount">{item.amount}</p>
              {item.subtext && <p className="fee-subtext">{item.subtext}</p>}
            </div>
            <div className={`status-badge ${item.status === 'Paid' ? 'badge-paid' : 'badge-not-paid'}`}>
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialOverview;
