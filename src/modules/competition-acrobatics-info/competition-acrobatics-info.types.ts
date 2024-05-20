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
