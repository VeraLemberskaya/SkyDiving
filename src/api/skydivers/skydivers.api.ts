import { request } from '@api/client';

import { Pagination } from '../types/common';

import {
  CreateSkydiverRequest,
  GetSportsmenParams,
  SkyDiver,
  UpdateSkydiverRequest,
} from './types';

const SKYDIVERS_URL = '/skydivers';
const SKYDIVERS_PAGE_URL = `${SKYDIVERS_URL}/page`;
const EXTERNAL_SKYDIVERS_URL = `${SKYDIVERS_URL}/external`;

const SKYDIVER_BY_ID_URL = (id: number) => `${SKYDIVERS_URL}/${id}`;
const EXTERNAL_SKYDIVER_BY_ID_URL = (id: number) =>
  `${EXTERNAL_SKYDIVERS_URL}/${id}`;

export const getSkydivers = (params: GetSportsmenParams) => {
  return request<Pagination<SkyDiver>>({
    url: SKYDIVERS_PAGE_URL,
    method: 'get',
    params,
  });
};

export const createExternalSkydiver = (data: CreateSkydiverRequest) => {
  return request<SkyDiver>({
    url: EXTERNAL_SKYDIVERS_URL,
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
    url: EXTERNAL_SKYDIVER_BY_ID_URL(id),
    method: 'put',
    data,
  });
};

export const deleteSkydiver = (id: number) => {
  return request<void>({
    url: SKYDIVER_BY_ID_URL(id),
    method: 'delete',
  });
};
