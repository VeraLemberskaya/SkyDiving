import z from 'zod';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const teamSchema = z.object({
  name: z.string().min(1, REQUIRED),
  skydiversIds: z.array(z.number()).min(1, REQUIRED),
});
