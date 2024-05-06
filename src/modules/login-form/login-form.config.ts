import z from 'zod';

import { validationMessages } from '@constants/validation';

export const defaultValues = {
  login: '',
  password: '',
};

export const loginSchema = z.object({
  login: z.string().min(5, validationMessages.REQUIRED),
  password: z.string().min(5, validationMessages.REQUIRED),
});
