import { CompetitionReferee } from '@api/types';

export interface PanelOfRefereesProps {
  competitionId: number;
}

export interface RefereeInfoDataType
  extends Pick<
    CompetitionReferee,
    'workPerformed' | 'category' | 'refereeNumber'
  > {
  key: string | number;
  fullName: string;
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
