import { Judge } from '@api/mock-types';

import { JudgesFilterValues } from './filter-judge-modal.type';

export const getDefaultValues = (judge?: Judge): JudgesFilterValues => ({
  category: judge?.category ?? '',
});
