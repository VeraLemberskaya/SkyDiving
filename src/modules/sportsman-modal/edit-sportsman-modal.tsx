import { SportsmanModal } from './components/sportsman-modal';
import { EditSportsmanModalProps } from './sportsman-modal.types';

export const EditSportsmanModal = ({
  sportsman,
  isOpen,
  onClose,
}: EditSportsmanModalProps) => {
  const handleSubmit = () => {
    //submit
  };

  return (
    <SportsmanModal
      isOpen={isOpen}
      key={sportsman.id}
      sportsman={sportsman}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
