import { Team } from '@api/mock-types';

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

export type Mode = 'add' | 'edit';

export interface AddParticipantsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AddParticipantsValues {
  participantIds: number[];
}
