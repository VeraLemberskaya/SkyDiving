import z from 'zod';

import { validationMessages } from '@constants/validation';

const { REQUIRED } = validationMessages;

export const startRefereeingSchema = z.object({
  roundNumber: z.number({ invalid_type_error: REQUIRED }),
  serieNumber: z.number({ invalid_type_error: REQUIRED }),
  skydiverId: z.number({ invalid_type_error: REQUIRED }),
});

export const MIN_ROUND = 1;
export const MAX_ROUND = 5;

export const MIN_SERIE = 1;
export const MAX_SERIE = 4;
