import { request } from '@api/client';

import {
  AddJumpingRequest,
  CompetitionMemberJumpingResponse,
  DeleteJumpingParams,
  GetJumpingListParams,
  GetNextJumpingNumberParams,
  Jumping,
  NextJumpingNumberResponse,
  UpdateJumpingRequest,
} from './types';

const JUMPING_URL = '/jumping';

export const getJumpingList = ({
  skydiverId,
  competitionId,
}: GetJumpingListParams) => {
  return request<CompetitionMemberJumpingResponse>({
    url: `${JUMPING_URL}/competition/${competitionId}/skydiver/${skydiverId}/list`,
    method: 'get',
  });
};

export const getNextJumpingNumber = ({
  skydiverId,
  competitionId,
}: GetNextJumpingNumberParams) => {
  return request<NextJumpingNumberResponse>({
    url: `${JUMPING_URL}/competition/${competitionId}/skydiver/${skydiverId}`,
    method: 'get',
  });
};

export const addSkydiverJumping = ({
  competitionId,
  data,
}: {
  competitionId: number;
  data: AddJumpingRequest;
}) => {
  return request<void>({
    url: `${JUMPING_URL}/competition/${competitionId}`,
    method: 'post',
    data,
  });
};

export const updateSkydiverJumping = ({
  competitionId,
  skydiverId,
  data,
}: {
  competitionId: number;
  skydiverId: number;
  data: UpdateJumpingRequest;
}) => {
  return request<Jumping>({
    url: `${JUMPING_URL}/competition/${competitionId}/skydiver/${skydiverId}`,
    method: 'put',
    data,
  });
};

export const deleteJumping = ({
  jumpingId,
  competitionId,
}: DeleteJumpingParams) => {
  return request<void>({
    url: `${JUMPING_URL}/${jumpingId}/competition/${competitionId}`,
    method: 'delete',
  });
};
