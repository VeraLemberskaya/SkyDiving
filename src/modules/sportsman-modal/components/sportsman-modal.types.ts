import { Sportsman } from '@api/types';

export interface SportsmanModalProps {
  sportsman?: Sportsman;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: SportsmanFormValues) => void;
}

export interface SportsmanFormValues {
  firstName: string;
  secondName: string;
  patronymic: string;
  sportDegree: string;
}
