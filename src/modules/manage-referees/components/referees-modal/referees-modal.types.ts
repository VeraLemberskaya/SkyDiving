export interface RefereesModalProps<Values> {
  title: string;
  isOpen: boolean;
  refereeId?: number;
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
