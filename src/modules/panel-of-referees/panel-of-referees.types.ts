import { CompetitionReferee, Referee } from '@api/types';

export interface PanelOfRefereesProps {
  competitionId: number;
}

export interface RefereeInfoDataType
  extends Pick<
    CompetitionReferee,
    'id' | 'workPerformed' | 'category' | 'refereeNumber'
  > {
  key: string | number;
  fullName: string;
}

export interface AddRefereeFormValues {
  refereeId?: number;
  workPerformed: string;
}

export interface AddRefereeModalProps {
  isOpen: boolean;
  referees?: Referee[];
  onClose: () => void;
  onSubmit: (data: AddRefereeFormValues) => void;
}

export interface RefereesTableProps {
  competitionId: number;
  data: CompetitionReferee[];
  title: string;
  onAddReferee: () => void;
}

export type CollegiumType = 'main' | 'regular';
