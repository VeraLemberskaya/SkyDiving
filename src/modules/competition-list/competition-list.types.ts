import { Competition } from '@api/types';

export interface CompetitionListProps {
  title: string;
  completed?: boolean;
}

export interface CompetitionItemProps {
  competition: Competition;
}

export interface AcrobaticButtonProps {
  competitionId: number;
}
