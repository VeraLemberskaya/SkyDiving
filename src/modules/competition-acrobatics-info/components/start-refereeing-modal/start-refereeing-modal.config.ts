import z from 'zod';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const startRefereeingSchema = z.object({
  round: z.number({ invalid_type_error: REQUIRED }),
  series: z.number({ invalid_type_error: REQUIRED }),
  participantId: z.number({ invalid_type_error: REQUIRED }),
});
