import { ReactNode } from 'react';

import { Judge } from '@api/types';

export interface JudgeInfoTableProps {
  start?: ReactNode;
  loading?: boolean;
  data: Judge[];
  onAdd?: () => void;
}

export interface JudgeInfoDataType
  extends Pick<Judge, 'serialNumber' | 'category'> {
  key: string | number;
  fullName: string;
}

export interface Modal {
  isOpen: boolean;
  type: 'edit' | 'add';
}
