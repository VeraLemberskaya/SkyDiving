import { request } from '@api/client';

import { DeleteRefereeFromStageParams, RefereesCollegiums } from './types';

const REFEREES_URL = '/referees';

const REFEREES_BY_STAGE_ID_URL = (id: number) =>
  `${REFEREES_URL}/competitionStage/${id}`;
const DELETE_REFEREE_FROM_STAGE = ({
  refereeId,
  stageId,
}: DeleteRefereeFromStageParams) =>
  `${REFEREES_URL}/${refereeId}/competitionStage/${stageId}`;

const getRefereesByStageId = (stageId: number) => {
  return request<RefereesCollegiums>({
    url: REFEREES_BY_STAGE_ID_URL(stageId),
    method: 'get',
  });
};

const deleteReferee = (id: number) => {
  return request<void>({
    url: `${REFEREES_URL}/${id}`,
    method: 'delete',
  });
};

const deleteRefereeFromStage = (params: DeleteRefereeFromStageParams) => {
  return request<void>({
    url: DELETE_REFEREE_FROM_STAGE(params),
    method: 'delete',
  });
};

export const referees = {
  getRefereesByStageId,
  deleteReferee,
  deleteRefereeFromStage,
};
