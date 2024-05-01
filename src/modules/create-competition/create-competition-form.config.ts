import z from 'zod';

import { validationMessages } from '@constants/validation';

export const defaultValues = {
  name: '',
  location: '',
  period: [],
  stageCount: '',
};

export const createCompetitionSchema = z.object({
  name: z.string().min(1, validationMessages.REQUIRED),
  location: z.string().min(1, validationMessages.REQUIRED),
  period: z.tuple([z.any(), z.any()], {
    invalid_type_error: validationMessages.REQUIRED,
  }),
  stageCount: z
    .number({ invalid_type_error: validationMessages.REQUIRED })
    .min(1),
});
