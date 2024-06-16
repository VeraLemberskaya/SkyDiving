import { Dayjs } from 'dayjs';

import { Competition } from '@api/types';

export interface CompetitionData {
  name: string;
  beginDate: string;
  endDate: string;
  place: string;
}

export interface CompetitionFormProps {
  competition?: Competition;
  loading?: boolean;
  onSubmit: (data: CompetitionData) => void;
}

export interface EditCompetitionFormProps {
  competitionId: number;
}

export interface CompetitionValues {
  name: string;
  place: string;
  period: Dayjs[];
}
