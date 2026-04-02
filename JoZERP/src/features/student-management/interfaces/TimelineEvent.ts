export interface TimelineEvent {
  type: 'Open' | 'Submission' | 'Internal' | 'Critical';
  title: string;
  description: string;
  date: string;
  colorOverride?: string;
}