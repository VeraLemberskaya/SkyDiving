import { CompetitionMember, CompetitionMembersResponse } from '@api/types';
import { getFullName } from '@utils/get-fullname';

export const getCompetitionMembers = (data?: CompetitionMembersResponse) => {
  if (data) {
    const { teams, individuals } = data;
    const teamsMembers = teams.flatMap(({ members }) => members);

    return [...teamsMembers, ...individuals];
  }

  return [];
};

export const getParticipantsOptions = (participants: CompetitionMember[]) =>
  participants.map(({ skydiverId, name, memberNumber }) => ({
    value: skydiverId,
    label: `${getFullName(name)} (№ ${memberNumber})`,
  }));
