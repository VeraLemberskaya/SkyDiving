import z from 'zod';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const defaultValues = {
  name: '',
  location: '',
  period: [],
  stageCount: '',
};

export const createCompetitionSchema = z.object({
  name: z.string().min(1, REQUIRED),
  location: z.string().min(1, REQUIRED),
  period: z.tuple([z.any(), z.any()], {
    invalid_type_error: REQUIRED,
  }),
  stageCount: z.number({ invalid_type_error: REQUIRED }).min(1),
});
