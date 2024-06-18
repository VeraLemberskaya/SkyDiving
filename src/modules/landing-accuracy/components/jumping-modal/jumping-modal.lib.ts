import dayjs from 'dayjs';

import { Jumping } from '@api/types';

export const getDefaultValues = (
  jumping?: Jumping,
  nextJumpingNumber?: number,
) => ({
  jumpingNumber: jumping?.number ?? nextJumpingNumber ?? 1,
  accuracy: jumping?.accuracy ?? undefined,
  performanceDate: jumping?.performanceDate
    ? dayjs(jumping.performanceDate)
    : dayjs(),
});
