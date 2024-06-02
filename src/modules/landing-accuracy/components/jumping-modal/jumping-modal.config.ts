import z from 'zod';
import { Dayjs } from 'dayjs';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const validationSchema = z.object({
  jumpingNumber: z.number({ required_error: REQUIRED }),
  accuracy: z.number({ required_error: REQUIRED }),
  date: z.custom<Dayjs>().refine((date) => date !== null, {
    message: REQUIRED,
  }),
});

export const MIN_JUMPING_NUMBER = 1;
export const MAX_JUMPING_NUMBER = 10;
export const MIN_ACCURACY = 0;
export const MAX_ACCURACY = 16;
