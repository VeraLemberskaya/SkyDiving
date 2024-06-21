import { SportRank } from '@api/types';

import { PaginationParams } from '../types/common';

export const enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
export interface Name {
  firstName: string;
  secondName: string;
  patronymic: string;
}

export interface SportsmenFilterParams {
  name?: string;
  gender?: Gender;
  sportRank?: SportRank;
  isInternal?: boolean;
}

export type GetSportsmenParams = PaginationParams & SportsmenFilterParams;

export interface SkyDiver {
  id: number;
  name: Name;
  sportRank: SportRank;
  gender: Gender;
  isInternal: boolean;
}

export interface CreateSkydiverRequest {
  firstName: string;
  secondName: string;
  patronymic: string;
  gender?: Gender;
  sportRank?: SportRank;
}

export interface UpdateSkydiverRequest {
  firstName: string;
  secondName: string;
  patronymic: string;
  gender?: Gender;
  sportRank?: SportRank;
}
