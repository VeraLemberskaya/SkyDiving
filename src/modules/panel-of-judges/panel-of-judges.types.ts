import { CompetitionJudge } from '@api/types';

export interface JudgeInfoDataType
  extends Pick<CompetitionJudge, 'serialNumber' | 'category'> {
  key: string | number;
  fullName: string;
  work: string;
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
