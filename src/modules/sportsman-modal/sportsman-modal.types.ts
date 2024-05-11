import { Sportsman } from '@api/types';

export interface AddSportsmanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface EditSportsmanModalProps {
  sportsman: Sportsman;
  isOpen: boolean;
  onClose: () => void;
}
