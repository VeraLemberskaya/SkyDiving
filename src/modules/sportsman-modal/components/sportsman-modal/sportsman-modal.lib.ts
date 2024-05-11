import { Sportsman } from '@api/types';

import { SportsmanFormValues } from '../sportsman-modal.types';

export const getDefaultValues = (
  sportsman?: Sportsman,
): SportsmanFormValues => ({
  firstName: sportsman?.firstName ?? '',
  secondName: sportsman?.secondName ?? '',
  patronymic: sportsman?.patronymic ?? '',
  sportDegree: sportsman?.sportDegree ?? '',
});
