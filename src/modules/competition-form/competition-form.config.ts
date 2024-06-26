import z from 'zod';
import { Dayjs } from 'dayjs';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

//TODO: вылидация периода чекнуть
//TODO: не раньше чем завтр. день
export const competitionSchema = z.object({
  name: z.string().min(1, REQUIRED),
  place: z.string().min(1, REQUIRED),
  period: z.tuple([z.custom<Dayjs>(), z.custom<Dayjs>()], {
    invalid_type_error: REQUIRED,
  }),
});
