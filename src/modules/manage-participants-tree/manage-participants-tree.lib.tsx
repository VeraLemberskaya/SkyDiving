import { Key } from 'react';

import { Participant, Team } from '@api/mock-types';

import { ParticipantNode } from './components/participant-node';

export const mapParticipantsToTreeData = (participants: Participant[]) => {
  return participants.map((participant) => ({
    selectable: false,
    title: <ParticipantNode participant={participant} />,
    key: `participant${participant.id}`,
  }));
};

export const mapTeamsToTreeData = (teams: Team[]) => {
  return teams.map((team) => ({
    title: team.name,
    key: `team${team.id}`,
    children: mapParticipantsToTreeData(team.participants),
  }));
};

export const getTeamIdFromKey = (key: Key) => {
  return Number(key.toString().replace('team', ''));
};
