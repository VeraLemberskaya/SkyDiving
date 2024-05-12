import { z } from 'zod';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const judgesFilterSchema = z.object({
  category: z.string().refine((value) => value.trim() !== '', {
    message: REQUIRED,
    path: ['category'],
  }),
});
