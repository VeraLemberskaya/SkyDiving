import { ParticipantNode } from './components/participant-node';
import { Participant, Team } from './participants-tree.types';

export const mapParticipantsToTreeData = (participants: Participant[]) => {
  return participants.map((participant) => ({
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
