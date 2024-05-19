import { ReactNode } from 'react';

import { Referee } from '@api/mock-types';

export interface RefereeInfoTableProps {
  loading?: boolean;
  data: Referee[];
  start?: (refereeId: number) => ReactNode;
}

export interface RefereeInfoDataType
  extends Pick<Referee, 'id' | 'serialNumber' | 'category'> {
  key: string | number;
  fullName: string;
}

export interface ManageRefereesProps {
  onManageCredential?: (refereeId: number) => void;
}

export type ModalType = 'edit' | 'add' | 'filter';

export interface Modal {
  isOpen: boolean;
  type: ModalType;
}

export interface RefereeFilter {
  category: string | null;
}

export interface State {
  modal: Modal;
  refereeId?: number;
  filter: RefereeFilter | null;
  search?: string;
}

export interface Actions {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  setRefereeId: (id: number) => void;
  setSearch: (value: string) => void;
  setFilter: (filter: RefereeFilter | null) => void;
}
