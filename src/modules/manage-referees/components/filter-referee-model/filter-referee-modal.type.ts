import { Referee } from '@api/types';

export interface JudgesFilterProps {
  referee?: Referee;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export interface JudgesFilterValues {
  category: string;
}
