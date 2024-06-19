import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createRefereeing,
  getCompetitionRefereeingSeries,
  updateRefereeingSeriesTime,
} from './trick-refereeing.api';

export const useCompetitionRefereeingSeries = (
  competitionId: number,
  refetch?: boolean,
) => {
  return useQuery({
    queryFn: () => getCompetitionRefereeingSeries(competitionId),
    queryKey: ['competition-refereeing-series', competitionId],
    refetchInterval: refetch ? 1000 : false,
  });
};

export const useCreateRefereeingMutation = () => {
  return useMutation({ mutationFn: createRefereeing });
};

export const useUpdateRefereeingSeriesTimeMutation = () => {
  return useMutation({ mutationFn: updateRefereeingSeriesTime });
};
