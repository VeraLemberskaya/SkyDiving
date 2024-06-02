import { Dayjs } from 'dayjs';

import { Jumping, Participant } from '@api/mock-types';

export interface JumpingFormValues {
  jumpingNumber: number;
  date?: Dayjs;
  accuracy?: number;
}

export interface JumpingListProps {
  onItemEdit: (jumping: Jumping) => void;
}

export interface JumpingItemProps {
  jumping: Jumping;
  deletable: boolean;
  onEdit: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface JumpingModalProps extends ModalProps {
  jumping?: Jumping;
  title: string;
  onSubmit: (values: JumpingFormValues) => void;
}

export interface EditJumpingModalProps extends ModalProps {
  jumping: Jumping;
}

type ModalType = 'add' | 'edit';

export interface Modal {
  type: ModalType | null;
  isOpen: boolean;
}

export interface ParticipantJumpingProps {
  participant: Participant;
}
