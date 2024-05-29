import { TrickAttempt } from '@api/mock-types';

export interface CompetitionAcrobaticsInfoProps {
  competitionId: number;
}

export interface StartRefereeingModalProps {
  competitionId: number;
  isOpen: boolean;
  onClose: () => void;
}

export interface StartRefereeingValues {
  round: number | null;
  series: number | null;
  participantId: number | null;
}

export interface PenaltyRowProps {
  trick: TrickAttempt;
  penaltyKey:
    | 'sPenalty'
    | 'dPenalty'
    | 'plusMinusPenalty'
    | 'minusPenalty'
    | 'arrowPenalty';
  penaltyTimeKey:
    | 'sPenaltyTime'
    | 'dPenaltyTime'
    | 'plusMinusPenaltyTime'
    | 'minusPenaltyTime'
    | 'arrowPenaltyTime';
}

export interface AcrobaticsTableProps {
  round: number;
  series: number;
}

export interface TableTitleProps {
  round: number;
  series: number;
}
