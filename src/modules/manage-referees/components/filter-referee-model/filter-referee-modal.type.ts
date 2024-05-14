import { Referee } from '@api/types';

export interface RefereesFilterProps {
  referee?: Referee;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export interface RefereesFilterValues {
  category: string;
}
