import { Dayjs } from 'dayjs';

import { CompetitionMember, Jumping } from '@api/types';

export interface JumpingFormValues {
  jumpingNumber: number;
  performanceDate: Dayjs;
  accuracy?: number;
}

export interface JumpingListProps {
  data: Jumping[];
  onItemEdit: (jumping: Jumping) => void;
  onDelete: (jumpingId: number) => void;
}

export interface JumpingItemProps {
  jumping: Jumping;
  deletable: boolean;
  onEdit: () => void;
  onDelete: (jumpingId: number) => void;
}

export interface JumpingModalProps {
  competitionId: number;
  isOpen: boolean;
  nextJumpingNumber?: number;
  jumping?: Jumping;
  title: string;
  onClose: () => void;
  onSubmit: (values: JumpingFormValues) => void;
}

type ModalType = 'add' | 'edit';

export interface Modal {
  type: ModalType | null;
  isOpen: boolean;
}

export interface ParticipantJumpingProps {
  participant: CompetitionMember;
}

export interface LandingAccuracyProps {
  competitionId: number;
}
