import { Gender, SportRank } from '@api/types';

export interface SportsmanFormValues {
  firstName: string;
  secondName: string;
  patronymic: string;
  sportRank?: SportRank;
  gender?: Gender;
}
