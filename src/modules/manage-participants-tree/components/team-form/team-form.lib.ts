import { Team } from '@api/mock-types';

export const getDefaultValues = (team?: Team) => ({
  name: team?.name ?? '',
  participantIds: team?.participants.map(({ id }) => id) ?? [],
});
