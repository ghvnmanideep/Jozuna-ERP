export interface Accreditation {
  id: number;
  name: string;
  verified: boolean;
}

export interface AccreditationCardProps {
  accreditations: Accreditation[];
}