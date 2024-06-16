import { SportsmenFilter } from '../../manage-sportsmen.types';

export const getDefaultValues = (filter: SportsmenFilter | null) => ({
  sportRank: filter?.sportRank,
  gender: filter?.gender,
  isInternal: filter?.isInternal,
});
