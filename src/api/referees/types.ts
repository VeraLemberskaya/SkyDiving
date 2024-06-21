import { PaginationParams } from '../types/common';

//TODO: make enum
export interface Referee {
  id: number;
  firstName: string;
  secondName: string;
  patronymic: string;
  category: string | null;
}

export interface CompetitionReferee extends Referee {
  workPerformed: string;
  refereeNumber: number;
}

export interface CompetitionCollegiumResponse {
  id: number;
  mainCollegium: CompetitionReferee[];
  collegium: CompetitionReferee[];
}

export interface DeleteRefereeFromCompetitionParams {
  refereeId: number;
  competitionId: number;
}

export interface GetRefereesParams extends PaginationParams {
  name?: string;
}
