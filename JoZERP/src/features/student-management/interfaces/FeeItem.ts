export interface FeeItem {
  id: string;
  title: string;
  amount: string;
  subtext?: string;
  status: 'Paid' | 'Not Paid';
}