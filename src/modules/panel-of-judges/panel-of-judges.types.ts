export interface JudgeDataType {
  key: string;
  serialNumber: number;
  work: string;
  fullName: string;
  category: string;
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
  data: JudgeDataType[];
  title: string;
  onAddJudge: () => void;
}
