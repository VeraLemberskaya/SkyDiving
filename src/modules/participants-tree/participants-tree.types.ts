import { CompetitionMember, Team } from '@api/types';

export interface ParticipantTreeOptions {
  selectTeams?: boolean;
  selectParticipants?: boolean;
  deleteTeams?: boolean;
  deleteParticipants?: boolean;
}

export interface ParticipantsTreeProps {
  competitionId: number;
  selectedTeamId?: number;
  selectedParticipantId?: number;
  options?: ParticipantTreeOptions;
  defaultExpandedTeamId?: number;
  onSelect: (args: { id: number; type: 'team' | 'participant' }) => void;
  onAddTeam?: () => void;
  onAddParticipant?: () => void;
  onDeleteTeam?: () => void;
}

export interface ParticipantNodeProps {
  participant: CompetitionMember;
  competitionId: number;
  deletable?: boolean;
}

export interface TeamNodeProps {
  team: Team;
  competitionId: number;
  deletable?: boolean;
  onDelete?: () => void;
}

export interface TreeHeaderProps {
  title: string;
  onAdd?: () => void;
}

export interface NoDataTextProps {
  show: boolean;
  text: string;
}
