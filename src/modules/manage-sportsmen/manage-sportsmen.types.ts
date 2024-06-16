import { ReactNode } from 'react';
import { Dayjs } from 'dayjs';
import { Control } from 'react-hook-form';

import { Gender, SkyDiver, SportRank } from '@api/types';

export interface ManageSportsmenProps {
  onlyExternal?: boolean;
  onManageCredential?: (sportsmanId: number) => void;
}

export interface SportsmenInfoDataType extends Omit<SkyDiver, 'name'> {
  key: string | number;
  fullName: string;
  number: number;
}

export interface SportsmenInfoTableProps {
  data?: SkyDiver[];
  loading?: boolean;
  disableActionsForInternal?: boolean;
  total?: number;
  start?: (sportsmanId: number) => ReactNode;
}

export interface SportsmanModalProps<Values> {
  title: string;
  isOpen: boolean;
  sportsman?: SkyDiver;
  onClose: () => void;
  onSubmit: (values: Values) => Promise<void>;
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

export interface EditModalProps extends ModalProps {
  sportsman: SkyDiver;
}

export type ModalType = 'edit' | 'add' | 'filter';

export interface Modal {
  isOpen: boolean;
  type: ModalType;
}

export interface SportsmenFilter {
  sportRank?: SportRank;
  gender?: Gender;
  isInternal?: boolean;
}

export interface State {
  modal: Modal;
  sportsmanId?: number;
  filter: SportsmenFilter | null;
  search?: string;
  page: number;
}

export interface Actions {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  setSportsmanId: (id: number) => void;
  setSearch: (value: string) => void;
  setFilter: (filter: SportsmenFilter | null) => void;
  setPage: (page: number) => void;
}

export interface SportsmanFormControlProps {
  control: Control<SportsmanFormValues>;
}
