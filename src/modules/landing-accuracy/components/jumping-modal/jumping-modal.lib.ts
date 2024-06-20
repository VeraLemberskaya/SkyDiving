import dayjs, { Dayjs } from 'dayjs';

import { Jumping } from '@api/types';

export const getDefaultValues = (
  jumping?: Jumping,
  nextJumpingNumber?: number,
  defaultDate?: Dayjs,
) => ({
  jumpingNumber: jumping?.number ?? nextJumpingNumber ?? 1,
  accuracy: jumping?.accuracy ?? undefined,
  performanceDate: jumping?.performanceDate
    ? dayjs(jumping.performanceDate)
    : defaultDate ?? dayjs(),
});
