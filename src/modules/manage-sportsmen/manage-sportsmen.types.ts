import { ReactNode } from 'react';

import { Sportsman } from '@api/types';

export interface ManageSportsmenProps {
  onlyExternal?: boolean;
}

export interface SportsmenInfoDataType
  extends Omit<Sportsman, 'firstName' | 'secondName' | 'patronymic'> {
  key: string | number;
  fullName: string;
}

export interface SportsmenInfoTableProps {
  data: Sportsman[];
  start?: ReactNode;
  loading?: boolean;
  disableActionsForInternal?: boolean;
  onAdd?: () => void;
  onEdit?: (sportsmanId: number) => void;
}

export interface SportsmanModalProps<Values> {
  title: string;
  isOpen: boolean;
  sportsmanId?: number;
  onClose: () => void;
  onSubmit: (values: Values) => void;
}

export interface AddSportsmanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface EditSportsmanModalProps {
  sportsmanId: number;
  isOpen: boolean;
  onClose: () => void;
}

export interface Modal {
  isOpen: boolean;
  type: 'edit' | 'add';
}
