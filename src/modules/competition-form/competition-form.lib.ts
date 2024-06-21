import dayjs from 'dayjs';

import { Competition } from '@api/types';

export const getValues = (competition?: Competition) => {
  const beginDate = competition?.beginDate;
  const endDate = competition?.endDate;

  return {
    name: competition?.name ?? '',
    place: competition?.place ?? '',
    period: beginDate && endDate ? [dayjs(beginDate), dayjs(endDate)] : [],
  };
};
