import { Participant, Team } from '@api/mock-types';

export interface ParticipantTreeOptions {
  selectTeams?: boolean;
  selectParticipants?: boolean;
  deleteTeams?: boolean;
  deleteParticipants?: boolean;
}

export interface ParticipantsTreeProps {
  selectedTeamId?: number;
  selectedParticipantId?: number;
  options?: ParticipantTreeOptions;
  onSelect: (args: { id: number; type: 'team' | 'participant' }) => void;
  onAddTeam?: () => void;
  onAddParticipant?: () => void;
}

export interface ParticipantNodeProps {
  participant: Participant;
  deletable?: boolean;
}

export interface TeamNodeProps {
  team: Team;
  deletable?: boolean;
}

export interface TreeHeaderProps {
  title: string;
  onAdd?: () => void;
}
