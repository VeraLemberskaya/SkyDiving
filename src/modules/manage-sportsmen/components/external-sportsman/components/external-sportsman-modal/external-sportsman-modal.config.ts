import z from 'zod';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const sportsmanSchema = z.object({
  firstName: z.string().min(1, REQUIRED),
  secondName: z.string().min(1, REQUIRED),
  patronymic: z.string().min(1, REQUIRED),
  sportDegree: z.string().optional(),
  gender: z.enum(['male', 'female'], { required_error: REQUIRED }),
});
