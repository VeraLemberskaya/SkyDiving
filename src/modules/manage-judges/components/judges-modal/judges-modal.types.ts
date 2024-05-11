import { Judge } from '@api/types';

export interface JudgesModalProps {
  judge?: Judge;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: JudgeFormValues) => void;
}

export interface JudgeFormValues {
  firstName: string;
  secondName: string;
  patronymic: string;
  category: string;
}
