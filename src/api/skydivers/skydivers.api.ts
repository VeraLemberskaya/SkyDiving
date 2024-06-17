import { request } from '@api/client';

import { Pagination } from '../types/common';

import {
  CreateSkydiverRequest,
  GetSportsmenParams,
  SkyDiver,
  UpdateSkydiverRequest,
} from './types';

const SKYDIVERS_URL = '/skydivers';

export const getSkydivers = (params: GetSportsmenParams) => {
  return request<Pagination<SkyDiver>>({
    url: `${SKYDIVERS_URL}/page`,
    method: 'get',
    params,
  });
};

export const getAvailableCompetitionSkydivers = (competitionId: number) => {
  return request<SkyDiver[]>({
    url: `${SKYDIVERS_URL}/${competitionId}/free-skydivers`,
    method: 'get',
  });
};

export const createExternalSkydiver = (data: CreateSkydiverRequest) => {
  return request<SkyDiver>({
    url: `${SKYDIVERS_URL}/external`,
    method: 'post',
    data,
  });
};

export const updateExternalSkydiver = ({
  id,
  data,
}: {
  id: number;
  data: UpdateSkydiverRequest;
}) => {
  return request<SkyDiver>({
    url: `${SKYDIVERS_URL}/external/${id}`,
    method: 'put',
    data,
  });
};

export const deleteSkydiver = (id: number) => {
  return request<void>({
    url: `${SKYDIVERS_URL}/${id}`,
    method: 'delete',
  });
};
