import { request } from '@api/client';

import { Pagination } from '../types/common';

import {
  CompetitionCollegiumResponse,
  DeleteRefereeFromCompetitionParams,
  GetRefereesParams,
  Referee,
} from './types';

const REFEREES_URL = '/referees';
const REFEREES_PAGE_URL = `${REFEREES_URL}/page`;

const REFEREE_BY_COMPETITION_ID_URL = (competitionId: number) =>
  `${REFEREES_URL}/${competitionId}`;

const REFEREE_COMPETITION_BY_IDS = ({
  refereeId,
  competitionId,
}: {
  refereeId: number;
  competitionId: number;
}) => `${REFEREES_URL}/${refereeId}/competition/${competitionId}`;

export const getReferees = (params: GetRefereesParams) => {
  return request<Pagination<Referee>>({
    url: REFEREES_PAGE_URL,
    method: 'get',
    params,
  });
};

export const getCompetitionReferees = (competitionId: number) => {
  return request<CompetitionCollegiumResponse>({
    url: REFEREE_BY_COMPETITION_ID_URL(competitionId),
    method: 'get',
  });
};

export const deleteRefereeFromCompetition = (
  params: DeleteRefereeFromCompetitionParams,
) => {
  return request<void>({
    url: REFEREE_COMPETITION_BY_IDS(params),
    method: 'delete',
  });
};
