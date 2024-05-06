import { Team } from '@api/types';

export const getDefaultValues = (team?: Team) => ({
  name: team?.name ?? '',
  participantIds: team?.participants.map(({ id }) => id) ?? [],
});
