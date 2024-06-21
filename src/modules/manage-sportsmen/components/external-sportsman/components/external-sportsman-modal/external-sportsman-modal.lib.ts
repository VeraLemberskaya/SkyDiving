import { SkyDiver } from '@api/types';

import { SportsmanFormValues } from './external-sportsman-modal.types';

export const getDefaultValues = (
  sportsman?: SkyDiver,
): SportsmanFormValues => ({
  firstName: sportsman?.name.firstName ?? '',
  secondName: sportsman?.name.secondName ?? '',
  patronymic: sportsman?.name.patronymic ?? '',
  sportRank: sportsman?.sportRank,
  gender: sportsman?.gender,
});
