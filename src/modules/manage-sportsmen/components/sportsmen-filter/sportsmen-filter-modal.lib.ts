import { SportsmenFilter } from '../../manage-sportsmen.types';

export const getDefaultValues = (filter: SportsmenFilter | null) => ({
  sportDegree: filter?.sportDegree ?? null,
  gender: filter?.gender ?? null,
  isInternal: filter?.isInternal ?? null,
});
