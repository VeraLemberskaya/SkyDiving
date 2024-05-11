import { SportsmanModal } from './components/sportsman-modal';
import { AddSportsmanModalProps } from './sportsman-modal.types';

export const AddSportsmanModal = ({
  isOpen,
  onClose,
}: AddSportsmanModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <SportsmanModal isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} />
  );
};
