import { Referee } from '@api/types';

export interface JudgesModalProps {
  referee?: Referee;
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSubmit: (values: JudgeFormValues) => void;
}

export interface JudgeFormValues {
  firstName: string;
  secondName: string;
  patronymic: string;
  category: string;
}

export interface AddJudgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface EditJudgeModalProps extends AddJudgeModalProps {
  referee: Referee;
}
