import { Gender } from '@api/types';

export interface SportsmenFilterValues {
  sportDegree?: string;
  gender?: Gender;
  isInternal?: boolean;
}
