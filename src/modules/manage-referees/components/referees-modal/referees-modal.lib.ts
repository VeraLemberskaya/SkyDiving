import { Referee } from '@api/types';

import { JudgeFormValues } from './referees-modal.types';

export const getDefaultValues = (referee?: Referee): JudgeFormValues => ({
  firstName: referee?.firstName ?? '',
  secondName: referee?.secondName ?? '',
  patronymic: referee?.patronymic ?? '',
  category: referee?.category ?? '',
});
