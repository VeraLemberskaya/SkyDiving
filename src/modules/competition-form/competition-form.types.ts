import { Dayjs } from 'dayjs';

import { Competition } from '@api/mock-types';
import { CompetitionData } from '@api/types';

export interface CompetitionFormProps {
  competition?: Competition;
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
