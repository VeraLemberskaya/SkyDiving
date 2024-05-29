import { Competition } from '@api/mock-types';

export interface CompetitionListProps {
  title: string;
}

export interface CompetitionItemProps {
  competition: Competition;
}

export interface AcrobaticButtonProps {
  competitionId: number;
}
