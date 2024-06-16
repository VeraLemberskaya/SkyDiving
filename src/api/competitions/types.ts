import { PaginationParams } from '../types/common';

export interface Competition {
  id: number;
  name: string;
  beginDate: string;
  endDate: string;
  place: string;
  status: string;
}

export interface CreateCompetitionRequest {
  name: string;
  beginDate: string;
  endDate: string;
  place: string;
}

export interface UpdateCompetitionRequest {
  name: string;
  beginDate: string;
  endDate: string;
  place: string;
}

interface CollegiumReferee {
  refereeId: number;
  refereeNumber: number;
  workPerformed: string;
}

export interface CreateCollegiumRequest {
  mainCollegium: CollegiumReferee[];
  collegium: CollegiumReferee[];
}

export interface UpdateCollegiumRequest {
  collegiumId: number;
  mainCollegium: CollegiumReferee[];
  collegium: CollegiumReferee[];
}

export interface CollegiumResponse {
  competitionId: number;
  collegiumId: number;
}

export interface GetCompetitionsParams extends PaginationParams {
  isCompleted: boolean;
}
