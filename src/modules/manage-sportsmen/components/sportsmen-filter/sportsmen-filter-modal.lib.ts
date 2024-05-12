import { SportsmenFilter } from '../../manage-sportsmen.types';

export const getDefaultValues = (filter: SportsmenFilter | null) => ({
  sportDegree: filter?.sportDegree,
  gender: filter?.gender,
  isInternal: filter?.isInternal,
});
