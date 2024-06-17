import { Team } from '@api/types';

export interface ManageParticipantsTreeProps {
  competitionId: number;
}

export interface TeamFormProps {
  title: string;
  team?: Team;
  competitionId: number;
  onSubmit: (values: TeamFormValues) => void;
}

export interface EditTeamFormProps {
  team: Team;
  competitionId: number;
}

export interface AddTeamFormProps {
  competitionId: number;
}

export interface TeamFormValues {
  name: string;
  skydiversIds: number[];
}

export type Mode = 'add' | 'edit';

export interface AddParticipantsModalProps {
  competitionId: number;
  isOpen: boolean;
  onClose: () => void;
}

export interface AddParticipantsValues {
  participantIds: number[];
}
