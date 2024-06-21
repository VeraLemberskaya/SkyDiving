import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createCompetitionTeam,
  getCompetitionMembers,
  updateCompetitionTeam,
  deleteCompetitionTeam,
} from './teams.api';

export const useCompetitionMembersQuery = (competitionId: number) => {
  return useQuery({
    queryFn: () => getCompetitionMembers(competitionId),
    queryKey: ['competition-members', competitionId],
    staleTime: Infinity,
  });
};

export const useCreateTeamMutation = () => {
  return useMutation({ mutationFn: createCompetitionTeam });
};

export const useUpdateTeamMutation = () => {
  return useMutation({ mutationFn: updateCompetitionTeam });
};

export const useDeleteTeamMutation = () => {
  return useMutation({ mutationFn: deleteCompetitionTeam });
};
