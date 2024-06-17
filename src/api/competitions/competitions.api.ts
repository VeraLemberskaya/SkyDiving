import { request } from '@api/client';

import { Pagination } from '../types/common';

import {
  AddRefereeToCompetitionRequest,
  CollegiumResponse,
  Competition,
  CreateCompetitionRequest,
  GetCompetitionsParams,
  UpdateCompetitionRequest,
} from './types';

const COMPETITIONS_URL = '/competitions';

export const getCompetitions = (params: GetCompetitionsParams) => {
  return request<Pagination<Competition>>({
    url: COMPETITIONS_URL,
    method: 'get',
    params,
  });
};

export const getCompetitionById = (id: number) => {
  return request<Competition>({
    url: `${COMPETITIONS_URL}/${id}`,
    method: 'get',
  });
};

export const createCompetition = (data: CreateCompetitionRequest) => {
  return request<{ id: number }>({
    url: `${COMPETITIONS_URL}/initial`,
    method: 'post',
    data,
  });
};

export const addRefereeToCompetition = ({
  id,
  data,
}: {
  id: number;
  data: AddRefereeToCompetitionRequest;
}) => {
  return request<CollegiumResponse>({
    url: `${COMPETITIONS_URL}/${id}`,
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
    url: `${COMPETITIONS_URL}/${id}`,
    method: 'put',
    data,
  });
};

export const deleteCompetition = (id: number) => {
  return request<void>({
    url: `${COMPETITIONS_URL}/${id}`,
    method: 'delete',
  });
};
