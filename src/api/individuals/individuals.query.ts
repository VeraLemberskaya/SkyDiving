import { useMutation } from '@tanstack/react-query';

import {
  addCompetitionIndividuals,
  deleteCompetitionIndividual,
} from './individuals.api';

export const useCreateCompetitionIndividualsMutation = () => {
  return useMutation({ mutationFn: addCompetitionIndividuals });
};

export const useDeleteCompetitionIndividualMutation = () => {
  return useMutation({ mutationFn: deleteCompetitionIndividual });
};
