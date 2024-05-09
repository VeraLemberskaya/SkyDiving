import { ReactNode } from 'react';

import { Sportsman } from '@api/types';

export interface SportsmenInfoDataType extends Omit<Sportsman, 'id'> {
  key: string | number;
}

export interface SportsmenInfoTableProps {
  start?: ReactNode;
  loading?: boolean;
  data: Sportsman[];
}
