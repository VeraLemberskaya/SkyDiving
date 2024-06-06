export const enum PenaltyTypes {
  arrowPenalty = 'arrowPenalty',
  dPenalty = 'dPenalty',
  minusPenalty = 'minusPenalty',
  plusMinusPenalty = 'plusMinusPenalty',
  sPenalty = 'sPenalty',
}

export const enum PenaltyReasonType {
  OF = 'OF',
  AF = 'AF',
  IS = 'IS',
  NP = 'NP',
}

export interface Penalty {
  title: string;
  types: PenaltyTypes[];
}

export interface PenaltyListProps {
  dataConfig: Penalty[];
  onSelect: (title: string, type: PenaltyTypes, angle: number) => void;
}

export interface PenaltyItemProps {
  penalty: Penalty;
  onSelect: (title: string, type: PenaltyTypes, angle: number) => void;
}

export interface PenaltyState {
  [key: string]: {
    [key in PenaltyTypes]?: number;
  };
}
