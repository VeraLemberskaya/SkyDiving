import { useMutation, useQuery } from '@tanstack/react-query';

import { GetJumpingListParams, GetNextJumpingNumberParams } from './types';
import {
  addSkydiverJumping,
  deleteJumping,
  getJumpingList,
  getNextJumpingNumber,
  updateSkydiverJumping,
} from './jumping.api';

export const useCompetitionMemberJumpingListQuery = ({
  competitionId,
  skydiverId,
}: GetJumpingListParams) => {
  return useQuery({
    queryFn: () => getJumpingList({ competitionId, skydiverId }),
    queryKey: ['jumping-list', competitionId, skydiverId],
  });
};

export const useNextJumpingNumberQuery = ({
  competitionId,
  skydiverId,
}: GetNextJumpingNumberParams) => {
  return useQuery({
    queryFn: () => getNextJumpingNumber({ competitionId, skydiverId }),
    queryKey: ['jumping-number', competitionId, skydiverId],
  });
};

export const useAddJumpingMutation = () => {
  return useMutation({ mutationFn: addSkydiverJumping });
};

export const useUpdateJumpingMutation = () => {
  return useMutation({ mutationFn: updateSkydiverJumping });
};

export const useDeleteJumpingMutation = () => {
  return useMutation({ mutationFn: deleteJumping });
};
