import { Judge } from '@api/types';

export interface JudgesFilterProps {
  judge?: Judge;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export interface JudgesFilterValues {
  category: string;
}
