import { request } from '@api/client';

import { Pagination } from '../types/common';

import {
  CompetitionCollegiumResponse,
  DeleteRefereeFromCompetitionParams,
  GetRefereesParams,
  Referee,
} from './types';

const REFEREES_URL = '/referees';

export const getReferees = (params: GetRefereesParams) => {
  return request<Pagination<Referee>>({
    url: `${REFEREES_URL}/page`,
    method: 'get',
    params,
  });
};

export const getCompetitionReferees = (competitionId: number) => {
  return request<CompetitionCollegiumResponse>({
    url: `${REFEREES_URL}/${competitionId}`,
    method: 'get',
  });
};

export const deleteRefereeFromCompetition = ({
  refereeId,
  competitionId,
}: DeleteRefereeFromCompetitionParams) => {
  return request<void>({
    url: `${REFEREES_URL}/${refereeId}/competition/${competitionId}`,
    method: 'delete',
  });
};
