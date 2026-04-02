export interface DocumentInfo {
  id: string;
  title: string;
  required: boolean;
  status: 'uploaded' | 'pending';
  fileName?: string;
  uploadDate?: string;
}