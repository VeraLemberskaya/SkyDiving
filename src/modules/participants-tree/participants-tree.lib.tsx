import { Key } from 'react';

import { Participant, Team } from '@api/mock-types';

import { ParticipantNode } from './components/participant-node';
import { ParticipantTreeOptions } from './participants-tree.types';
import { TeamNode } from './components/team-node';

export const mapParticipantsToTreeData = (
  participants: Participant[],
  options: ParticipantTreeOptions,
) => {
  return participants.map((participant) => ({
    selectable: options.selectParticipants,
    title: (
      <ParticipantNode
        deletable={options.deleteParticipants}
        participant={participant}
      />
    ),
    key: `participant${participant.id}`,
  }));
};

export const mapTeamsToTreeData = (
  teams: Team[],
  options: ParticipantTreeOptions,
) => {
  return teams.map((team) => ({
    selectable: options.selectTeams,
    title: <TeamNode deletable={options.deleteTeams} team={team} />,
    key: `team${team.id}`,
    children: mapParticipantsToTreeData(team.participants, options),
  }));
};

export const getTeamIdFromKey = (key: Key) => {
  return Number(key.toString().replace('team', ''));
};

export const getParticipantIdFromKey = (key: Key) => {
  return Number(key.toString().replace('participant', ''));
};

export const getTreeKeys = ({
  selectedTeamId,
  selectedParticipantId,
}: {
  selectedTeamId?: number;
  selectedParticipantId?: number;
}) => {
  const keys = [];

  if (selectedTeamId) keys.push(`team${selectedTeamId}`);
  if (selectedParticipantId) keys.push(`participant${selectedParticipantId}`);

  return keys;
};
