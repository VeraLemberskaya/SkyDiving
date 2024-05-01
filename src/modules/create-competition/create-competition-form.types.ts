import { Dayjs } from 'dayjs';

export interface CreateCompetitionData {
  name: string;
  location: string;
  period: Dayjs[];
  stageCount: number | string;
}
