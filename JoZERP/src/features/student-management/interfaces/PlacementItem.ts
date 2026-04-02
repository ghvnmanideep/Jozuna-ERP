import React from 'react';

export interface PlacementItem {
  id: string;
  company: string;
  status: 'Waitlisted' | 'Under Review';
  logoColor: string;
  LogoIcon: React.ElementType;
} 