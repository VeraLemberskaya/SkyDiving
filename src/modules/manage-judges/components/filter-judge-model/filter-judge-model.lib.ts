import { Judge } from '@api/types';

import { JudgesFilterValues } from './filter-judge-modal.type';

export const getDefaultValues = (judge?: Judge): JudgesFilterValues => ({
  category: judge?.category ?? '',
});
