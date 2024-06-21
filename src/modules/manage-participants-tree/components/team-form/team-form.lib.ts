import { Team } from '@api/types';

export const getDefaultValues = (team?: Team) => ({
  name: team?.name ?? '',
  skydiversIds: team?.members.map(({ skydiverId }) => skydiverId) ?? [],
});
