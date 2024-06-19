import { request } from '@api/client';

import {
  CompetitionRefereeing,
  CreateRefereeingRequest,
  TrickRefereeing,
  UpdateRefereeingSeriesTimeRequest,
  UpdateRefereeingSeriesTimeResponse,
} from './types';

const TRICK_REFEREEING_URL = '/trick-refereeing';

export const getCompetitionRefereeingSeries = (competitionId: number) => {
  return request<CompetitionRefereeing[]>({
    url: `${TRICK_REFEREEING_URL}/trick-series/competition/${competitionId}`,
    method: 'get',
  });
};

export const updateRefereeingSeriesTime = (
  data: UpdateRefereeingSeriesTimeRequest,
) => {
  return request<UpdateRefereeingSeriesTimeResponse>({
    url: `${TRICK_REFEREEING_URL}/trick-series`,
    method: 'patch',
    data,
  });
};

export const createRefereeing = (data: CreateRefereeingRequest) => {
  return request<TrickRefereeing>({
    url: TRICK_REFEREEING_URL,
    method: 'post',
    data,
  });
};
