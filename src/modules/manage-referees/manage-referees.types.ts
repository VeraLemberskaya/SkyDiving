import { ReactNode } from 'react';

import { Referee } from '@api/types';

export interface RefereeInfoTableProps {
  loading?: boolean;
  data: Referee[];
  onAdd?: () => void;
  onFilter?: () => void;
  onEdit?: (refereeId: number) => void;
  start?: (refereeId: number) => ReactNode;
}

export interface RefereeInfoDataType
  extends Pick<Referee, 'id' | 'serialNumber' | 'category'> {
  key: string | number;
  fullName: string;
}

export interface Modal {
  isOpen: boolean;
  type: 'edit' | 'add' | 'filter';
}

export interface ManageRefereesProps {
  onManageCredential?: (refereeId: number) => void;
}
