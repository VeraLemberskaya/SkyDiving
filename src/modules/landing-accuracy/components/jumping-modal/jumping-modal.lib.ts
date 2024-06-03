import dayjs from 'dayjs';

import { Jumping } from '@api/mock-types';

export const getDefaultValues = (jumping?: Jumping) => ({
  jumpingNumber: jumping?.jumpingNumber ?? 1,
  accuracy: jumping?.accuracy ?? undefined,
  date: jumping?.date ? dayjs(jumping.date) : dayjs(),
});
