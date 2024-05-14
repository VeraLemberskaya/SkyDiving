import { request } from '@api/client';

import { Pagination, PaginationParams } from '../types/common';

import {
  CreateSkyDiverData,
  InternalSkyDiver,
  SkyDiver,
  SportsmenFilterParams,
} from './types';

const SKYDIVERS_URL = '/skydivers';
const SKYDIVERS_PAGE_URL = `${SKYDIVERS_URL}/page`;

const createSkydiver = (data: CreateSkyDiverData) => {
  return request<InternalSkyDiver>({
    url: SKYDIVERS_URL,
    method: 'post',
    data,
  });
};

const getSkydiversPage = (params: PaginationParams & SportsmenFilterParams) => {
  return request<Pagination<SkyDiver>>({
    url: SKYDIVERS_PAGE_URL,
    method: 'get',
    params,
  });
};

const deleteSkydiver = (id: number) => {
  return request<void>({
    url: `${SKYDIVERS_URL}/${id}`,
    method: 'delete',
  });
};

export const skydivers = {
  createSkydiver,
  getSkydiversPage,
  deleteSkydiver,
};
