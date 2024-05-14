import { Referee } from '@api/types';

export interface RefereesModalProps {
  referee?: Referee;
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSubmit: (values: RefereeFormValues) => void;
}

export interface RefereeFormValues {
  firstName: string;
  secondName: string;
  patronymic: string;
  category: string;
}

export interface AddRefereeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface EditRefereeModalProps extends AddRefereeModalProps {
  referee: Referee;
}
