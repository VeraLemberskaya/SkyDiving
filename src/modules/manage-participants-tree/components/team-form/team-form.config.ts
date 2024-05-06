import z from 'zod';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const addTeamSchema = z.object({
  name: z.string().min(1, REQUIRED),
  participantIds: z.array(z.number()).min(1, REQUIRED),
});
