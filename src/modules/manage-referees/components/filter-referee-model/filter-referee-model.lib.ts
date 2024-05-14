import { Referee } from '@api/types';

import { JudgesFilterValues } from './filter-referee-modal.type';

export const getDefaultValues = (referee?: Referee): JudgesFilterValues => ({
  category: referee?.category ?? '',
});
