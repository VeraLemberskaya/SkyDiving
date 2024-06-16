import { useMutation, useQuery } from '@tanstack/react-query';

import { GetSportsmenParams } from './types';
import {
  createExternalSkydiver,
  deleteSkydiver,
  getSkydivers,
  updateExternalSkydiver,
} from './skydivers.api';

export const useSkydiversQuery = (params: GetSportsmenParams) => {
  return useQuery({
    queryFn: () => getSkydivers(params),
    queryKey: ['skydivers', { ...params }],
  });
};

export const useCreateExternalSkydiverMutation = () => {
  return useMutation({ mutationFn: createExternalSkydiver });
};

export const useUpdateExternalSkydiverMutation = () => {
  return useMutation({ mutationFn: updateExternalSkydiver });
};

export const useDeleteSkydiverMutation = () => {
  return useMutation({ mutationFn: deleteSkydiver });
};
