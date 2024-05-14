import { Judge } from '@api/types';

import { JudgeFormValues } from './judges-modal.types';

export const getDefaultValues = (judge?: Judge): JudgeFormValues => ({
  firstName: judge?.firstName ?? '',
  secondName: judge?.secondName ?? '',
  patronymic: judge?.patronymic ?? '',
  category: judge?.category ?? '',
});
