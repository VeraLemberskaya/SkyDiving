import z from 'zod';

import {
  LOGIN_REGEX,
  PASSWORD_REGEX,
  validationMessages,
} from '@constants/validation';

const { REQUIRED, LOGIN_ERROR, PASSWORD_ERROR } = validationMessages;

export const defaultValues = {
  login: '',
  password: '',
};

export const loginSchema = z.object({
  login: z.string().min(1, REQUIRED).regex(LOGIN_REGEX, LOGIN_ERROR),
  password: z.string().min(1, REQUIRED).regex(PASSWORD_REGEX, PASSWORD_ERROR),
});
