import { useMutation, useQuery } from '@tanstack/react-query';

import { GetRefereesParams } from './types';
import {
  deleteRefereeFromCompetition,
  getCompetitionReferees,
  getReferees,
} from './referees.api';

export const useRefereesQuery = ({ number, size, name }: GetRefereesParams) => {
  return useQuery({
    queryFn: () => getReferees({ number, size, name }),
    queryKey: ['referees', { number, size, name }],
  });
};

export const useCompetitionRefereesQuery = (competitionId: number) => {
  return useQuery({
    queryFn: () => getCompetitionReferees(competitionId),
    queryKey: ['competition-referees', competitionId],
  });
};

export const useDeleteRefereeFromCompetitionMutation = () => {
  return useMutation({ mutationFn: deleteRefereeFromCompetition });
};
