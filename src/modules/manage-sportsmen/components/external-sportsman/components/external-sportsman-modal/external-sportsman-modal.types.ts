import { Gender } from '@api/types';

export interface SportsmanFormValues {
  firstName: string;
  secondName: string;
  patronymic: string;
  sportDegree: string;
  gender?: Gender;
}
