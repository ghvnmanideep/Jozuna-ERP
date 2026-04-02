import React from 'react';

export interface AuditEvent {
  id: string;
  type: 'payment' | 'result' | 'warning';
  title: string;
  date: string;
  meta: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}