import { CompetitionJudge } from '@api/types';

export interface JudgeDataType extends Omit<CompetitionJudge, 'id'> {
  key: string | number;
}

export interface AddJudgeFormValues {
  judgeId?: number;
  work: string;
}

export interface AddJudgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface JudgesTableProps {
  data: CompetitionJudge[];
  title: string;
  onAddJudge: () => void;
}
