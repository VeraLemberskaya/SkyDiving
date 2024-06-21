import { CompetitionRefereeing, Penalty } from '@api/types';

export interface CompetitionAcrobaticsInfoProps {
  competitionId: number;
}

export interface StartRefereeingModalProps {
  competitionId: number;
  isOpen: boolean;
  onClose: () => void;
}

export interface StartRefereeingValues {
  roundNumber: number | null;
  serieNumber: number | null;
  skydiverId: number | null;
}

export interface PenaltyRowProps {
  penalty?: Penalty;
}

export interface AcrobaticsTableProps {
  competitionId: number;
  data: CompetitionRefereeing;
}

export interface TableTitleProps {
  round: number;
  series: number;
}
