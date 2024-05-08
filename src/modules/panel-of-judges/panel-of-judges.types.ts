import { JudgeDataType } from '@api/types';

export interface AddJudgeFormValues {
  judgeId?: number;
  work: string;
}

export interface AddJudgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface JudgesTableProps {
  data: JudgeDataType[];
  title: string;
  onAddJudge: () => void;
}
