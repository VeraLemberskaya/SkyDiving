import { ReactNode } from 'react';
import { Dayjs } from 'dayjs';
import { Control } from 'react-hook-form';

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

export interface SportsmanFormValues {
  firstName: string;
  secondName: string;
  patronymic: string;
  gender: Gender | null;
  birthDate: Dayjs | null;
  birthLocation: string;
  employment: string;
  education: string;
  phone: string;
  passportSeries: string;
  passportNumber: string;
  passportPersonalNumber: string;
  issuingAuthority: string;
  issuingDate: Dayjs | null;
  sportActivityStartYear: Dayjs | null;
  trainer: string;
  sportDegree: string;
  fatherFullName: string;
  fatherJob: string;
  fatherPhone: string;
  motherFullName: string;
  motherJob: string;
  motherPhone: string;
  homeAddress: string;
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
  sportDegree: string | null;
  gender: Gender | null;
  isInternal: boolean | null;
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
  setFilter: (filter: SportsmenFilter | null) => void;
}

export interface SportsmanFormControlProps {
  control: Control<SportsmanFormValues>;
}
