import { Sportsman } from '@api/types';

export interface AddSportsmanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface EditSportsmanModalProps extends AddSportsmanModalProps {
  sportsman: Sportsman;
}
