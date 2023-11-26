export type NavItemsList = {
  id: string;
  label: string;
  path: string;
  icon: string;
  isActive: boolean;
};

export enum StatusType {
  UNCOMPLETE = 'UNCOMPLETE',
  LOW_RISK = 'LOW_RISK',
  NEEDS_REVIEW = 'NEEDS_REVIEW',
}

export type SubmissionsType = {
  description: string;
  from: string;
  to: string;
  dueDate: string;
  status: StatusType;
  lat: number;
  lng: number;
};
