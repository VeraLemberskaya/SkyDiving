import { Referee } from '@api/mock-types';

import { RefereeFormValues } from './referees-modal.types';

export const getDefaultValues = (referee?: Referee): RefereeFormValues => ({
  firstName: referee?.firstName ?? '',
  secondName: referee?.secondName ?? '',
  patronymic: referee?.patronymic ?? '',
  category: referee?.category ?? '',
});
