import { RefereeFilter } from '../../manage-referees.types';

export const getDefaultValues = (filter?: RefereeFilter | null) => ({
  category: filter?.category ?? '',
});
