import { ReactNode } from 'react';

import { Gender, Sportsman } from '@api/mock-types';

export interface ManageSportsmenProps {
  onlyExternal?: boolean;
  onManageCredential?: (sportsmanId: number) => void;
}

export interface SportsmenInfoDataType
  extends Omit<Sportsman, 'firstName' | 'secondName' | 'patronymic'> {
  key: string | number;
  fullName: string;
}

export interface SportsmenInfoTableProps {
  data: Sportsman[];
  loading?: boolean;
  disableActionsForInternal?: boolean;
  start?: (sportsmanId: number) => ReactNode;
}

export interface SportsmanModalProps<Values> {
  title: string;
  isOpen: boolean;
  sportsmanId?: number;
  onClose: () => void;
  onSubmit: (values: Values) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type ModalType = 'edit' | 'add' | 'filter';

export interface Modal {
  isOpen: boolean;
  type: ModalType;
}

export interface SportsmenFilter {
  sportDegree?: string;
  gender?: Gender;
  isInternal?: boolean;
}

export interface State {
  modal: Modal;
  sportsmanId?: number;
  filter: SportsmenFilter | null;
  search?: string;
}

export interface Actions {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  setSportsmanId: (id: number) => void;
  setSearch: (value: string) => void;
  setFilter: (filter: SportsmenFilter) => void;
}
