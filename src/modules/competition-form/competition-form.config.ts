import z from 'zod';
import { Dayjs } from 'dayjs';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const createCompetitionSchema = z.object({
  name: z.string().min(1, REQUIRED),
  place: z.string().min(1, REQUIRED),
  period: z.tuple([z.custom<Dayjs>(), z.custom<Dayjs>()], {
    invalid_type_error: REQUIRED,
  }),
});
