import { CompetitionReferee } from '@api/types';

export interface RefereeInfoDataType
  extends Pick<CompetitionReferee, 'serialNumber' | 'category'> {
  key: string | number;
  fullName: string;
  work: string;
}

export interface AddRefereeFormValues {
  refereeId?: number;
  work: string;
}

export interface AddRefereeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface RefereesTableProps {
  data: CompetitionReferee[];
  title: string;
  onAddReferee: () => void;
}
