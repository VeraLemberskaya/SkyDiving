import { ReactNode } from 'react';

import { Judge } from '@api/mock-types';

export interface JudgeInfoTableProps {
  loading?: boolean;
  data: Judge[];
  onAdd?: () => void;
  onFilter?: () => void;
  onEdit?: (judgeId: number) => void;
  start?: (judgeId: number) => ReactNode;
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
