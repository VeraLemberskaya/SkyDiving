import { Referee } from '@api/types';

export interface RefereesModalProps<Values> {
  referee?: Referee;
  isOpen: boolean;
  refereeId?: number;
  title: string;
  onClose: () => void;
  onSubmit: (values: Values) => void;
}

export interface RefereeFormValues {
  firstName: string;
  secondName: string;
  patronymic: string;
  category: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
