import { request } from '@api/client';

import { CreateCompetitionData, CreateStageData, StageResponse } from './types';

const COMPETITIONS_URL = '/competitions';

const CREATE_COMPETITION_URL = `${COMPETITIONS_URL}/initial`;
const CREATE_STAGE_FOR_COMPETITION_URL = (id: number) =>
  `${COMPETITIONS_URL}/${id}/stage`;

const createCompetition = (data: CreateCompetitionData) => {
  return request<{ id: number }>({
    url: CREATE_COMPETITION_URL,
    method: 'post',
    data,
  });
};

const createStageForCompetition = ({
  competitionId,
  data,
}: {
  competitionId: number;
  data: CreateStageData;
}) => {
  return request<StageResponse>({
    url: CREATE_STAGE_FOR_COMPETITION_URL(competitionId),
    method: 'post',
    data,
  });
};

export const competitions = {
  createCompetition,
  createStageForCompetition,
};
