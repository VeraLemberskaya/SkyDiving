import { useQuery } from '@tanstack/react-query';

import { getKnowledgeBase } from './knowledge-base.api';
import { KnowledgeBaseResponse } from './types';

type SelectFn<T> = (data: KnowledgeBaseResponse) => T;

export const useKnowledgeBaseQuery = <T>(select: SelectFn<T>) => {
  return useQuery({
    queryFn: getKnowledgeBase,
    queryKey: ['knowledge-base'],
    staleTime: Infinity,
    select,
  });
};

export const useSportRanks = () => {
  return useKnowledgeBaseQuery(({ sportRanks }) => sportRanks);
};

export const useRefereeCategories = () => {
  return useKnowledgeBaseQuery(({ refereeCategory }) => refereeCategory);
};
