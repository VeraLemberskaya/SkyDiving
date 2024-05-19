import { Participant, Team } from '@api/mock-types';

export interface ParticipantNodeProps {
  participant: Participant;
}

export interface TeamNodeProps {
  team: Team;
}

export interface TreeHeaderProps {
  title: string;
  onAdd: () => void;
}

export interface TeamFormProps {
  title: string;
  team?: Team;
  onSubmit: (values: TeamFormValues) => void;
}

export interface EditTeamFormProps {
  team: Team;
}

export interface TeamFormValues {
  name: string;
  participantIds: number[];
}

export interface ParticipantsTreeProps {
  selectedTeamId?: number;
  onSelect: (teamId: number) => void;
  onAddTeam: () => void;
  onAddParticipant: () => void;
}

export type Mode = 'add' | 'edit';

export interface AddParticipantsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AddParticipantsValues {
  participantIds: number[];
}
