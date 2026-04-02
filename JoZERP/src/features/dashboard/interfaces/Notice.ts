export interface Notice {
  id: number;
  badge: string;
  badgeVariant?: 'blue' | 'green';
  title: string;
  detailId: string;
  department: string;
  linkText: string;
}
