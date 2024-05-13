import { ReactNode } from 'react';

import { Judge } from '@api/types';

export interface JudgeInfoTableProps {
  start?: (judgeId: number) => ReactNode;
  loading?: boolean;
  data: Judge[];
  onAdd?: () => void;
  onFilter?: () => void;
  onEdit?: (judgeId: number) => void;
}

export interface JudgeInfoDataType
  extends Pick<Judge, 'id' | 'serialNumber' | 'category'> {
  key: string | number;
  fullName: string;
}

export interface Modal {
  isOpen: boolean;
  type: 'edit' | 'add' | 'filter';
}

export interface ManageJudgesProps {
  onManageCredential?: (judgeId: number) => void;
}
