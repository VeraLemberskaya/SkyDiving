import z from 'zod';

import { validationMessages } from '@constants/validation';

export const defaultValues = {
  participantIds: [],
};

export const addParticipantsSchema = z.object({
  participantIds: z.array(z.number()).min(1, validationMessages.REQUIRED),
});
