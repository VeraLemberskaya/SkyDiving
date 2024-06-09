import dayjs from 'dayjs';

import { Competition } from '@api/mock-types';

export const getDefaultValues = (competition?: Competition) => {
  const beginDate = competition?.beginDate;
  const endDate = competition?.endDate;

  return {
    name: competition?.name ?? '',
    place: competition?.place ?? '',
    period: beginDate && endDate ? [dayjs(beginDate), dayjs(endDate)] : [],
  };
};
