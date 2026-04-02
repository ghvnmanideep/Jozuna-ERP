import { Student } from './Student';
import { TimelineEvent } from './TimelineEvent';

export interface StudentProfileProps {
  selectedStudent: Student;
  timelineEvents: TimelineEvent[];
}