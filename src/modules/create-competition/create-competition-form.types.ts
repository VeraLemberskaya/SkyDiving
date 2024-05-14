import { Dayjs } from 'dayjs';

export interface CreateCompetitionValues {
  name: string;
  place: string;
  period: Dayjs[];
  numberOfStages?: number;
}
