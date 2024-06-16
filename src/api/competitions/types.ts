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

export interface AddRefereeToCompetitionRequest {
  refereeId: number;
  refereeNumber: number;
  workPerformed: string;
  isMainCollegium: boolean;
}

export interface CollegiumResponse {
  competitionId: number;
  collegiumId: number;
}

export interface GetCompetitionsParams extends PaginationParams {
  isCompleted: boolean;
}
