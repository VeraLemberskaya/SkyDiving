import { request } from '@api/client';

import { Pagination } from '../types/common';

import {
  CollegiumResponse,
  Competition,
  CreateCollegiumRequest,
  CreateCompetitionRequest,
  GetCompetitionsParams,
  UpdateCollegiumRequest,
  UpdateCompetitionRequest,
} from './types';

const COMPETITIONS_URL = '/competitions';
const CREATE_COMPETITION_URL = `${COMPETITIONS_URL}/initial`;

const COMPETITION_BY_ID_URL = (id: number) => `${COMPETITIONS_URL}/${id}`;
const COMPETITION_COLLEGIUM_URL = (id: number) =>
  `${COMPETITIONS_URL}/${id}/collegium`;

export const getCompetitions = (params: GetCompetitionsParams) => {
  return request<Pagination<Competition>>({
    url: COMPETITIONS_URL,
    method: 'get',
    params,
  });
};

export const getCompetitionById = (id: number) => {
  return request<Competition>({
    url: COMPETITION_BY_ID_URL(id),
    method: 'get',
  });
};

export const createCompetition = (data: CreateCompetitionRequest) => {
  return request<{ id: number }>({
    url: CREATE_COMPETITION_URL,
    method: 'post',
    data,
  });
};

export const updateCompetition = ({
  id,
  data,
}: {
  id: number;
  data: UpdateCompetitionRequest;
}) => {
  return request<Competition>({
    url: COMPETITION_BY_ID_URL(id),
    method: 'put',
    data,
  });
};

export const deleteCompetition = (id: number) => {
  return request<void>({
    url: COMPETITION_BY_ID_URL(id),
    method: 'delete',
  });
};

export const createCompetitionCollegium = ({
  competitionId,
  data,
}: {
  competitionId: number;
  data: CreateCollegiumRequest;
}) => {
  return request<CollegiumResponse>({
    url: COMPETITION_COLLEGIUM_URL(competitionId),
    method: 'post',
    data,
  });
};

export const updateCompetitionCollegium = ({
  competitionId,
  data,
}: {
  competitionId: number;
  data: UpdateCollegiumRequest;
}) => {
  return request<CollegiumResponse>({
    url: COMPETITION_COLLEGIUM_URL(competitionId),
    method: 'put',
    data,
  });
};
