import { ReactNode } from 'react';

import { Sportsman } from '@api/types';

export interface SportsmenInfoDataType
  extends Pick<Sportsman, 'serialNumber' | 'sportDegree'> {
  key: string | number;
  fullName: string;
}

export interface SportsmenInfoTableProps {
  start?: ReactNode;
  loading?: boolean;
  data: Sportsman[];
  onAdd?: () => void;
  onEdit?: (sportsmanId: number) => void;
}
