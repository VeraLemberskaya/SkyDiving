import { z } from 'zod';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const refereesFilterSchema = z.object({
  category: z.string().refine((value) => value.trim() !== '', REQUIRED),
});
