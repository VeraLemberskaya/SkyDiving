import { ReactNode } from 'react';

import { Judge } from '@api/types';

export interface JudgeInfoTableProps {
  start?: ReactNode;
  loading?: boolean;
  data: Judge[];
}

export interface JudgeInfoDataType extends Omit<Judge, 'id'> {
  key: string | number;
}
