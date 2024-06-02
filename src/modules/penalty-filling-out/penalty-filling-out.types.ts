export const enum PenaltyTypes {
  arrowPenalty = 'arrowPenalty',
  dPenalty = 'dPenalty',
  minusPenalty = 'minusPenalty',
  plusMinusPenalty = 'plusMinusPenalty',
  sPenalty = 'sPenalty',
}

export interface Penalty {
  title: string;
  types: PenaltyTypes[];
}
