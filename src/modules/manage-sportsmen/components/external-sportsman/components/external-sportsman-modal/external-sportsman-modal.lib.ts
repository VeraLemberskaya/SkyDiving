import { Sportsman } from '@api/types';

import { SportsmanFormValues } from './external-sportsman-modal.types';

export const getDefaultValues = (
  sportsman?: Sportsman,
): SportsmanFormValues => ({
  firstName: sportsman?.firstName ?? '',
  secondName: sportsman?.secondName ?? '',
  patronymic: sportsman?.patronymic ?? '',
  sportDegree: sportsman?.sportDegree ?? '',
  gender: sportsman?.gender,
});
