import { Gender } from '@api/mock-types';

export interface SportsmanFormValues {
  firstName: string;
  secondName: string;
  patronymic: string;
  sportDegree: string;
  gender?: Gender;
}
