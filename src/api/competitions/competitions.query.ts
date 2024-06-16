import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createCompetition,
  createCompetitionCollegium,
  deleteCompetition,
  getCompetitionById,
  getCompetitions,
  updateCompetition,
  updateCompetitionCollegium,
} from './competitions.api';
import { GetCompetitionsParams } from './types';

export const useCompetitionsQuery = ({
  isCompleted,
  number,
  size,
}: GetCompetitionsParams) => {
  return useQuery({
    queryFn: () => getCompetitions({ number, size, isCompleted }),
    queryKey: ['competitions', { number, size, isCompleted }],
  });
};

export const useCompetitionQuery = (id?: number) => {
  return useQuery({
    queryFn: () => getCompetitionById(id as number),
    queryKey: ['competitions', id],
    enabled: Boolean(id),
    staleTime: Infinity,
  });
};

export const useCreateCompetitionCollegiumMutation = () => {
  return useMutation({ mutationFn: createCompetitionCollegium });
};

export const useUpdateCompetitionCollegiumMutation = () => {
  return useMutation({ mutationFn: updateCompetitionCollegium });
};

export const useCreateCompetitionMutation = () => {
  return useMutation({ mutationFn: createCompetition });
};

export const useUpdateCompetitionMutation = () => {
  return useMutation({ mutationFn: updateCompetition });
};

export const useDeleteCompetitionMutation = () => {
  return useMutation({ mutationFn: deleteCompetition });
};
