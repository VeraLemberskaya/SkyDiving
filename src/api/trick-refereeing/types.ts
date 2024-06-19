export interface CreateRefereeingRequest {
  competitionId: number;
  skydiverId: number;
  serieNumber: number;
  roundNumber: number;
}

export const enum PenaltyReason {
  OF = 'OF',
  AF = 'AF',
  IS = 'IS',
  NP = 'NP',
}

export interface TrickSerie {
  id: number;
  refereeId: number;
  refereeNumber: number;
  skydiverId: number;
  competitionId: number;
  serieNumber: number;
  roundNumber: number;
  score: number;
  timeWithoutPenalty: number;
  totalPenalty: number;
  penaltyReason: PenaltyReason;
  isTimeSubmitted: boolean;
}

export interface TrickRefereeing {
  skydiverNumber: number;
  skydiverId: number;
  competitionId: number;
  serieNumber: number;
  roundNumber: number;
  trickSeries: TrickSerie[];
}

export const enum TrickType {
  TURN_1 = 'TURN_1',
  TURN_2 = 'TURN_2',
  TURN_3 = 'TURN_3',
  TURN_4 = 'TURN_4',
  BACK_LOOP_1 = 'BACK_LOOP_1',
  BACK_LOOP_2 = 'BACK_LOOP_2',
}

export const enum PenaltyType {
  ARROW_PENALTY = 'ARROW_PENALTY',
  D_PENALTY = 'D_PENALTY',
  S_PENALTY = 'S_PENALTY',
  MINUS_PENALTY = 'MINUS_PENALTY',
  PLUS_MINUS_PENALTY = 'PLUS_MINUS_PENALTY',
}

export interface Penalty {
  penaltyType: PenaltyType;
  penaltyValue: number;
  penaltyValueTime: number;
}

export interface TrickAttempt {
  id: number;
  trickSerieId: number;
  type: TrickType;
  penalties: Penalty[];
}

export interface RefereeingResult {
  id: number;
  refereeId: number;
  refereeNumber: number;
  timeWithoutPenalty: number;
  totalPenalty: number;
  isTimeSubmitted: boolean;
  penaltyReason: PenaltyReason;
  trickAttempts: Record<string, TrickAttempt>;
}

export interface CompetitionRefereeing {
  memberNumber: number;
  serieNumber: number;
  roundNumber: number;
  totalScore: number;
  refereeingResults: RefereeingResult[];
}

export interface UpdateRefereeingSeriesTimeRequest {
  trickSerieId: number;
  isTimeSubmitted?: boolean;
  timeWithoutPenalty?: number | null;
}

export interface UpdateRefereeingSeriesTimeResponse {
  trickSerieId: number;
  isTimeSubmitted: boolean | null;
  timeWithoutPenalty: number | null;
}
