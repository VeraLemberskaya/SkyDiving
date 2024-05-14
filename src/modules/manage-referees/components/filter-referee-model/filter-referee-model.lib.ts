import { Referee } from '@api/types';

import { RefereesFilterValues } from './filter-referee-modal.type';

export const getDefaultValues = (referee?: Referee): RefereesFilterValues => ({
  category: referee?.category ?? '',
});
